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
                        amount {
                          value
                          currencyCode
                        }
                        lineItems {
                          physicalItems {
                            entityId
                            name
                            quantity
                          }
                          digitalItems {
                            entityId
                            name
                            quantity
                          }
                        }
                    }
                }
            }
        }
    `;

    try {
        const { data, headers } = await window.axios.post(graphQLUrl, {
            query: graphQLMutation,
        }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${storefrontApiToken}`,
                // do we need X-Bc-Customer-Id ???
            },
            withCredentials: true
        });

        console.log(headers);

        const {
            data: {
                cart: {
                    createCart
                }
            },
            errors,
        } = data;

        if (errors?.[0]?.message) {
            alert(errors[0].message);

            return;
        }

        window.localStorage.setItem('cartInfo', JSON.stringify(createCart.cart));

        return createCart.cart;
    } catch(error) {
        console.error(error);

        return {};
    }
}

async function getCartWithGraphQL(cartId) {
    const bcStoreUrl = getBcStoreUrl();
    const storefrontApiToken = await getStorefrontJwtToken();

    const graphQLUrl = `${bcStoreUrl}/graphql`;
    const graphQLMutation = `
      query {
        site {
          cart(entityId: "${cartId}") {
            entityId
            currencyCode
            amount {
              value
              currencyCode
            }
            lineItems {
              physicalItems {
                entityId
                name
                quantity
              }
            }
          }
        }
      }
    `;;

    try {
        const { data } = await window.axios.post(graphQLUrl, {
            query: graphQLMutation,
        }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${storefrontApiToken}`,
                // do we need X-Bc-Customer-Id ???
            },
            withCredentials: true
        });

        const {
            data: {
                site: {
                    cart
                }
            },
            errors,
        } = data;

        if (errors?.[0]?.message) {
            alert(errors[0].message);

            return;
        }

        window.localStorage.setItem('cartInfo', JSON.stringify(cart));

        return cart;
    } catch(error) {
        console.error(error);

        return {};
    }
}

async function removeCartWithGraphQL(cartId) {
    const bcStoreUrl = getBcStoreUrl();
    const storefrontApiToken = await getStorefrontJwtToken();

    const graphQLUrl = `${bcStoreUrl}/graphql`;
    const graphQLMutation = `
        mutation {
            cart {
                deleteCart(input: { cartEntityId: "${cartId}" }) {
                    deletedCartEntityId
                }
            }
        }
    `;

    try {
        const { data } = await window.axios.post(graphQLUrl, {
            query: graphQLMutation,
        }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${storefrontApiToken}`,
                // do we need X-Bc-Customer-Id ???
            },
            withCredentials: true
        });

        const {
            data: {
                cart: {
                    deleteCart: {
                        deletedCartEntityId
                    }
                }
            },
            errors,
        } = data;

        if (errors?.[0]?.message) {
            alert(errors[0].message);

            return;
        }

        alert(`Cart deleted successfully (cartId: ${deletedCartEntityId})`);

        window.localStorage.removeItem('cartInfo');
        document.getElementById('cart-id-input').value = '';

        return deletedCartEntityId;
    } catch(error) {
        console.error(error);

        return {};
    }
}


async function fetchPaymentWalletButtons(cartId) {
    const bcStoreUrl = getBcStoreUrl();
    const storefrontApiToken = await getStorefrontJwtToken();

    const graphQLUrl = `${bcStoreUrl}/graphql`;

    const graphQLQuery = `
        query {
            site {
                paymentWallets(filter: {cartEntityId: "${cartId}"}) {
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
        const { data, headers } = await window.axios.post(graphQLUrl, {
            query: graphQLQuery,
        }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${storefrontApiToken}`,
            },
            withCredentials: true
        });

        console.log(headers);

        const paymentMethodsList = data.data?.site?.paymentWallets?.edges?.map(paymentWalletEdge => {
            return paymentWalletEdge?.node?.entityId;
        });

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
async function getWalletButtonsOption(paymentMethodId, cartId) {
    switch (paymentMethodId) {
        case 'bigcommerce_payments.googlepay': {
            const data = await getPaymentWalletWithInitialisationOptions(paymentMethodId, cartId);

            return {
                paymentMethodId: 'bigcommerce.paymentsgooglepay',
                containerId: 'bigcommerce-payments-gp-button',
                options: {
                    cartId,
                    amount: JSON.parse(window.localStorage.getItem('cartInfo')).amount.value,
                    currency: { code: 'USD', decimalPlaces: 2 },
                    ...data,
                },
            };
        }
        default:
            return {
                paymentMethodId: 'default-payment-method',
            };
    }
}

async function getPaymentWalletWithInitialisationOptions(entityId, cartId) {
    const bcStoreUrl = getBcStoreUrl();
    const storefrontApiToken = await getStorefrontJwtToken();

    const graphQLUrl = `${bcStoreUrl}/graphql`;

    const graphQLQuery = `
  query {
    site {
      paymentWalletWithInitializationData(
        filter: { paymentWalletEntityId: "${entityId}", cartEntityId: "${cartId}" }
      ) {
        clientToken
        initializationData
      }
    }
  }
`;

    try {
        const { data } = await window.axios.post(graphQLUrl, {
            query: graphQLQuery,
        }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${storefrontApiToken}`,
            },
            withCredentials: true
        });

        return data.data.site.paymentWalletWithInitializationData;
    } catch (error) {
        console.log(error);
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

    // setCookie('cartId', cartEntityId, { secure: false, sameSite: 'none', crossDomain: true });

    if (!cartEntityId) {
        console.error('Can\'t render PayPal button because cart id is not provided');

        return;
    }

    let paymentWalletsList = await fetchPaymentWalletButtons(cartEntityId);

    const paymentButtonOptions = await Promise.all(paymentWalletsList.map((paymentMethodId) => getWalletButtonsOption(paymentMethodId, cartEntityId)));

    const walletButtonsOptions = paymentButtonOptions.map((walletButtonsOption) => {
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
button.addEventListener('click', async () => {
    await onRenderWalletButtonsButtonClick();
});

const buttonCart = document.getElementById('get-cart');
buttonCart.addEventListener('click', () => {
    const cartValue = document.getElementById('cart-id-input').value;

    getCartWithGraphQL(cartValue);
});

const buttonCartCreation = document.getElementById('create-cart');
buttonCartCreation.addEventListener('click', () => {
    const productId = getProductId();
    createCartWithGraphQL(productId).then((cart) => {
        document.getElementById('cart-id-input').value = cart.entityId;
    });
});

const buttonCartRemoval = document.getElementById('remove-cart');
buttonCartRemoval.addEventListener('click', () => {
    const cartValue = document.getElementById('cart-id-input').value;

    removeCartWithGraphQL(cartValue);
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
