/**
 *
 * Checkout kit loader
 *
 */
async function getCheckoutKitLoader(env) {
    if (!window.checkoutKitLoader) {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.defer = true;
            script.src = env === 'local'
                ? `https://bc-nick.github.io/v1/loader.js`
                : env === 'int'
                    ? 'https://checkout-sdk.integration.zone/v1/loader.js'
                    : 'https://checkout-sdk.bigcommerce.com/v1/loader.js';

            script.onload = resolve;

            document.body.append(script);
        });
    }

    return window.checkoutKitLoader;
}

async function initCheckoutButtonInitializer() {
    const checkoutButtonModule = await window.checkoutKitLoader.load('wallet-button');

    window.checkoutButtonInitializer = checkoutButtonModule.createWalletButtonInitializer({ graphQLEndpoint: 'graphql' });
}

/**
 *
 * Render wallet buttons
 *
 * */
async function renderWalletButtons(props) {
    const { env, walletButtons } = props;

    if (walletButtons.length === 0) {
        console.error('Wallet buttons can not be rendered because wallet buttons options did not provided');

        return;
    }

    await getCheckoutKitLoader(env);
    await initCheckoutButtonInitializer();

    return walletButtons.map(renderWalletButton);
}

/**
 *
 * Wallet buttons rendering methods
 *
 * */
function renderWalletButton(props) {
    const { paymentMethodId } = props;

    console.log('renderWalletButton props', props);

    if (!props.paymentMethodId) {
        console.error('Can not render wallet button because paymentMethodId is not provided or its empty');

        return;
    }

    const paymentProviderInitializationOptions = getPaymentProviderInitializationOptions(props);

    if (!paymentProviderInitializationOptions) {
        console.error(`Wallet button with "${paymentMethodId}" payment method id is not implemented`);

        return;
    }

    window.checkoutButtonInitializer.initializeWalletButton(paymentProviderInitializationOptions);
}

/**
 *
 * Payment provider initialization options mapper
 *
 * */
function getPaymentProviderInitializationOptions(props) {
    const optionsGetter = {
        'bigcommerce.paymentsgooglepay': getBCPGooglePayButtonInitializationOptions,
    };

    const paymentProviderInitializationOptionsGetter = optionsGetter[props.paymentMethodId];

    if (!paymentProviderInitializationOptionsGetter) {
        return;
    }

    return paymentProviderInitializationOptionsGetter(props);
}

function getBCPGooglePayButtonInitializationOptions(props) {

    return {
        methodId: 'bigcommerce_paymentsgooglepay',
        containerId: props.containerId,
        bigcommerce_paymentsgooglepay: {
            ...props.options,
        },
    };
}

/**
 *
 * window object code
 *
 * */
window.BigCommerce = {
    ...window.BigCommerce,
    renderWalletButtons,
};
