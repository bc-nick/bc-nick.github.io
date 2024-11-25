/**
 *
 * Collect data from form
 *
 * */
function getBcStoreUrl() {
    return document.getElementById('bc-store-url').value;
}

function getStorefrontJwtToken() {
    return document.getElementById('bc-storefront-jwt').value;
}

async function getCartId() {
    return document.getElementById('cart-id-input').value;
}

function getProductId() {
    return Number(document.getElementById('product-id-input').value);
}

/**
 *
 * API generation requests
 *
 */

async function createCartWithGraphQL(productId) {
    const bcStoreUrl = getBcStoreUrl();
    const storefrontApiToken = await getStorefrontJwtToken();

    const graphQLUrl = `${bcStoreUrl}/graphql`;
    const graphQLMutation = `
        mutation {
            cart {
                createCart(input: {lineItems: {quantity: 1, productEntityId: ${productId}}}) {
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

        return data.cart.createCart.cart;
    } catch(error) {
        console.error(error);

        return {};
    }
}


async function fetchPaymentWalletButtons(cartId) {
    const bcStoreUrl = getBcStoreUrl();
    const storefrontApiToken = await getStorefrontJwtToken();

    const billingAddressCountry = "US";

    const graphQLUrl = `${bcStoreUrl}/graphql`;

    const graphQLQuery = `
        query {
            site {
                paymentWallets(filter: {cartEntityId: "${cartId}", billingCountryCode: "${billingAddressCountry}"}) {
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
                'X-Bc-Customer-Id': 0,
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

/**
 *
 * Options mapper
 *
 */
function getWalletButtonsOption(paymentMethodId, cartId) {
    switch (paymentMethodId) {
        case 'paypalcommerce.paypal': {
            return {
                paymentMethodId: paymentMethodId,
                containerId: 'paypalcommerce-button',
                options: {
                    style: { "color":"gold", "label":"checkout" },
                    cartId,
                },
            };
        }
        case 'braintree.paypal': {
            return {
                paymentMethodId: paymentMethodId,
                containerId: 'braintree-paypal-button',
                options: {
                    style: { "color":"gold", "label":"checkout" },
                    cartId,
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

async function onRenderWalletButtonsButtonClick() {
    const bcStoreUrl = getBcStoreUrl();
    const storefrontJwtToken = getStorefrontJwtToken();
    const env = document.getElementById('env-select').value;

    if (!storefrontJwtToken) {
        console.error('Can\'t render PayPal button because storefront JWT token is not provided');

        return;
    }

    if (!bcStoreUrl) {
        console.error('Can\'t render PayPal button because bc store url is not provided');

        return;
    }

    let cartEntityId = await getCartId();

    if (!cartEntityId) {
        console.error('Can\'t render PayPal button because cart id is not provided');

        return;
    }

    let paymentWalletsList = await fetchPaymentWalletButtons(cartEntityId);

    const walletButtonsOptions = paymentWalletsList.map((paymentMethodId) => {
        const walletButtonsOption = getWalletButtonsOption(paymentMethodId, cartEntityId);

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

/**
 *
 * UI communication
 *
 * */
const button = document.getElementById('render-wallet-buttons');
button.addEventListener('click', () => {
    onRenderWalletButtonsButtonClick();
});

const buttonCartCreation = document.getElementById('create-cart');
buttonCartCreation.addEventListener('click', () => {
    const productId = getProductId();
    createCartWithGraphQL(productId).then((cart) => {
        document.getElementById('cart-id-input').value = cart.entityId;
    });
});

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
