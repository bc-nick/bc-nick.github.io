/**
 *
 * Collect data from form
 *
 * */
function getBcStoreUrl() {
    return document.getElementById('bc-store-url').value;
}

function getBcApiUrl() {
    return document.getElementById('bc-api-url').value;
}

function getStoreHash() {
    return document.getElementById('store-hash-input').value;
}

function getXAuthToken() {
    return document.getElementById('x-auth-token-input').value;
}

function getAllowedCorsOrigins() {
    const corsOriginsInputValue = document.getElementById('cors-origins-input').value;
    const domains = corsOriginsInputValue.split(',');

    return domains.length > 2 ? domains.slice(0, 2) : domains;
}

function getChannelId() {
    return Number(document.getElementById('channel-id-input').value) || 1;
}

function getProductId() {
    return Number(document.getElementById('product-id-input').value);
}

function getStorefrontJwtToken() {
    return document.getElementById('bc-storefront-jwt').value;
}

/**
 *
 * API generation requests
 *
 */
async function getStorefrontApiToken() {
    const storeHash = getStoreHash();
    const xAuthToken = getXAuthToken();

    if (!storeHash || !xAuthToken) {
        console.error('Wallet buttons can\'t be rendered because store hash or x-auth-token is not provided');
    }

    const bcApiUrl = getBcApiUrl();

    const url = `${bcApiUrl}/stores/${storeHash}/v3/storefront/api-token`;
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Auth-Token': xAuthToken,
            'Access-Control-Allow-Origin': 'https://bc-nick.github.io/',
        },
        body: JSON.stringify({
            allowed_cors_origins: getAllowedCorsOrigins(),
            channel_id: getChannelId(),
            expires_at: 1885635176 // 5 years,
        }),
        // mode: 'no-cors',
    };

    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    const { data } = await response.json();

    return data.token;
}

async function createCartWithStorefrontAPI(productId) {
    const storeHash = getStoreHash();
    const xAuthToken = getXAuthToken();

    if (!storeHash || !xAuthToken) {
        console.error('Wallet buttons can\'t be rendered because store hash or x-auth-token is not provided');
    }

    const bcApiUrl = getBcApiUrl();

    const url = `${bcApiUrl}/stores/${storeHash}/v3/carts`;

    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Auth-Token': xAuthToken,
        },
        body: JSON.stringify({
            customer_id: 0,
            line_items: [{
                quantity: 1,
                product_id: productId,
            }],
            channel_id: 1,
            currency: {
                code: 'USD',
            },
            locale: 'en-US',
        }),
        // mode: 'no-cors',
    };

    try {
        const response = await fetch(url, options);
        const { data } = await response.json();

        console.log({ cartCreationV2RequestData: data });

        return data;
    } catch(error) {
        console.error(error);

        return {};
    }
}

async function createCartWithGraphQL(productId) {
    const bcStoreUrl = getBcStoreUrl();
    const storefrontApiToken = await getStorefrontApiToken();

    const graphQLUrl = `${bcStoreUrl}/graphql`;
    const graphQLMutation = `
        mutation {
            cart {
                createCart(input: {lineItems: {quantity: 1, productEntityId: ${productId}}) {
                    cart {
                        entityId
                    }
                }
            }
        }
    `;

    try {
        const response = await fetch(graphQLUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${storefrontApiToken}`,
            },
            body: JSON.stringify({
                query: graphQLMutation,
            }),
            // mode: 'no-cors',
        });

        const { data } = await response.json();

        console.log({ cartCreationRequestData: data });

        return data;
    } catch(error) {
        console.error(error);

        return {};
    }
}

async function fetchPaymentWalletButtons() {
    const bcStoreUrl = getBcStoreUrl();
    const storefrontApiToken = await getStorefrontApiToken();

    const billingAddressCountry = "US";

    const graphQLUrl = `${bcStoreUrl}/graphql`;
    const graphQLQuery = `
        query {
            site {
                paymentWallets(filter: {cartEntityId: "${getCartEntity?.id}", billingCountryCode: "${billingAddressCountry}"}) {
                    edges {
                        node {
                            entityId
                        }
                    }
                }
            }
        }
    `;

    try {
        const response = await fetch(graphQLUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${storefrontApiToken}`,
            },
            body: JSON.stringify({
                query: graphQLQuery,
            }),
            // mode: 'no-cors',
        });

        const { data } = await response.json();

        const paymentMethodsList = data?.site?.paymentWallets?.edges?.map(paymentWalletEdge => {
            return paymentWalletEdge?.node?.entityId;
        });

        console.log({ paymentMethodsList, data });

        return paymentMethodsList;
    } catch(error) {
        console.error(error);

        return {};
    }
}

async function fetchPaymentWalletWithInitializationData(entityList) {
    const storefrontApiToken = getStorefrontApiToken();

    const graphQLQuery = (entityId) => {
        return `
            query {
                site {
                    paymentWalletWithInitializationData(filter: {paymentWalletEntityId: "${entityId}"}) {
                        clientToken
                        initializationData
                    }
                }
            }
        `
    };
    const graphQLUrl = `${bcStoreUrl}/graphql`;

    try {
        const response = await Promise.all(entityList.map(async entityId => await fetch(graphQLUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${storefrontApiToken}`,
            },
            body: JSON.stringify({
                query: graphQLQuery(entityId),
            }),
            // mode: 'no-cors',
        })));

        const { data } = await response.json();

        console.log({ walletWithInitializationData: data });

        return data?.map(({ paymentWalletWithInitializationData }, index    ) => (
            { [entityList[index]]: paymentWalletWithInitializationData }
        ));
    } catch (error) {
        console.error(error);
    }
}

/**
 *
 * Options mapper
 *
 */
function getWalletButtonsOption(paymentMethodId) {
    switch (paymentMethodId) {
        case 'paypalcommerce.paypal': {
            return {
                paymentMethodId: paymentMethodId,
                containerId: 'paypalcommerce-button',
                options: {
                    style: { "color":"gold", "label":"checkout" },
                },
            };
        }
        case 'braintree.paypal': {
            return {
                paymentMethodId: paymentMethodId,
                containerId: 'braintree-paypal-button',
                options: {
                    style: { "color":"gold", "label":"checkout" },
                },
            };
        }
        default:
            return {};
    }
}

/**
 *
 * UI handlers
 *
 */
function onMockCheckboxChange(e) {
    if (e.target.checked) {
        document.body.classList.remove('use-api');
    } else {
        document.body.classList.add('use-api');
    }
}

async function onRenderWalletButtonsButtonClick(paymentMethodsList) {
    const bcStoreUrl = getBcStoreUrl();
    const storefrontJwtToken = getStorefrontJwtToken();
    const env = document.getElementById('env-select').value;
    const isMockEnabled = document.getElementById('mock-checkbox').checked;

    if (!bcStoreUrl) {
        console.error('Can\'t render PayPal button because bc store url is not provided');

        return;
    }

    const mockedPaymentWalletsList = paymentMethodsList || ['paypalcommerce.paypal'];
    let paymentWalletsList;
    let cartEntity;

    if (isMockEnabled) {
        paymentWalletsList = mockedPaymentWalletsList;
    } else {
        cartEntity = await onCreateCartClick('gql');
        paymentWalletsList = await fetchPaymentWalletButtons(cartEntity?.id);
    }

    // const paymentWalletWithInitializationData = await fetchPaymentWalletWithInitializationData(paymentWalletsList);
    const walletButtonsOptions = paymentWalletsList.map((paymentMethodId) => {
        const walletButtonsOption = getWalletButtonsOption(paymentMethodId);

        return {
            ...walletButtonsOption,
            options: {
                ...walletButtonsOption.options,
            }
        }
    });

    generateWalletButtonsContainers(walletButtonsOptions.map(({containerId}) => containerId));

    await window.BigCommerce.renderWalletButtons({
        bcStoreUrl,
        storefrontJwtToken,
        env,
        walletButtons: walletButtonsOptions,
    });
}

async function onCreateCartClick(version) {
    const productId = getProductId();

    if (!productId) {
        console.error('Can\'t create cart because product id is not provided');

        return;
    }

    if (version === 'v2') {
        await createCartWithStorefrontAPI(productId);
    }

    if (version === 'gql') {
        await createCartWithGraphQL();
    }
}

/**
 *
 * UI communication
 *
 * */
const button = document.getElementById('render-wallet-buttons');
button.addEventListener('click', () => {
    onRenderWalletButtonsButtonClick();
});

const braintreeButton = document.getElementById('render-braintree-button');
braintreeButton.addEventListener('click', () => {
    onRenderWalletButtonsButtonClick(['braintree.paypal']);
});

const mockCheckbox = document.getElementById('mock-checkbox');
mockCheckbox.addEventListener('change', onMockCheckboxChange);

const cartCreationStorefrontButton = document.getElementById('cart-creation-button-storefront');
cartCreationStorefrontButton.addEventListener('click', () => onCreateCartClick('v2'));

const cartCreationGQLButton = document.getElementById('cart-creation-button-gql');
cartCreationGQLButton.addEventListener('click', () => onCreateCartClick('gql'));

/**
 *
 * Tools
 *
 * */
function generateWalletButtonsContainers(walletButtonsContainers) {
    const mainContainer = document.getElementById('wallet-buttons-list');

    walletButtonsContainers.map((walletButtonContainer) => {
        const div = document.createElement('div');
        div.id = walletButtonContainer;

        mainContainer.appendChild(div);
    })
}
