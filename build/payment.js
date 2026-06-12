(self["webpackJsonpCheckout"] = self["webpackJsonpCheckout"] || []).push([["payment"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./packages/ui/src/modal/ModalLink.scss"
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./packages/ui/src/modal/ModalLink.scss ***!
  \*******************************************************************************************************************************************************/
(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".modal--withText {\n  padding-bottom: 0.75rem;\n  padding-top: 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ },

/***/ "./packages/ui/src/modal/ModalLink.scss"
/*!**********************************************!*\
  !*** ./packages/ui/src/modal/ModalLink.scss ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {


var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./ModalLink.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./packages/ui/src/modal/ModalLink.scss");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) // removed by dead control flow
{}

/***/ },

/***/ "./packages/bigcommerce-payments-utils/src/BigCommercePaymentsPayLaterBanner.tsx"
/*!***************************************************************************************!*\
  !*** ./packages/bigcommerce-payments-utils/src/BigCommercePaymentsPayLaterBanner.tsx ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_bigcommerce_payments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/bigcommerce-payments */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/bigcommerce-payments.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");



const BigCommercePaymentsPayLaterBanner = ({ methodId, containerId, onUnhandledError }) => {
    const { checkoutService } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        try {
            void checkoutService.initializePayment({
                methodId,
                integrations: [
                    _bigcommerce_checkout_sdk_integrations_bigcommerce_payments__WEBPACK_IMPORTED_MODULE_0__.createBigCommercePaymentsPayLaterPaymentStrategy,
                    _bigcommerce_checkout_sdk_integrations_bigcommerce_payments__WEBPACK_IMPORTED_MODULE_0__.createBigCommercePaymentsPaymentStrategy,
                ],
                [methodId]: {
                    bannerContainerId: containerId,
                },
            });
            void checkoutService.deinitializePayment({
                methodId,
            });
        }
        catch (error) {
            if (error instanceof Error) {
                onUnhandledError === null || onUnhandledError === void 0 ? void 0 : onUnhandledError(error);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-test": containerId, id: containerId });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BigCommercePaymentsPayLaterBanner);


/***/ },

/***/ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx"
/*!******************************************************************!*\
  !*** ./packages/contexts/src/paymentForm/PaymentFormContext.tsx ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentFormContext: () => (/* binding */ PaymentFormContext),
/* harmony export */   usePaymentFormContext: () => (/* binding */ usePaymentFormContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PaymentFormContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
function usePaymentFormContext() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PaymentFormContext);
    if (!context) {
        throw new Error('usePaymentFormContext must be used within a PaymentFormContextProvider');
    }
    return context;
}


/***/ },

/***/ "./packages/contexts/src/paymentForm/PaymentFormProvider.tsx"
/*!*******************************************************************!*\
  !*** ./packages/contexts/src/paymentForm/PaymentFormProvider.tsx ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentFormProvider: () => (/* binding */ PaymentFormProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PaymentFormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentFormContext */ "./packages/contexts/src/paymentForm/PaymentFormContext.tsx");


const PaymentFormProvider = ({ children, paymentForm }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PaymentFormContext__WEBPACK_IMPORTED_MODULE_1__.PaymentFormContext.Provider, { value: { paymentForm } }, children));
};


/***/ },

/***/ "./packages/core/src/app/address/SingleLineStaticAddress.tsx"
/*!*******************************************************************!*\
  !*** ./packages/core/src/app/address/SingleLineStaticAddress.tsx ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getAddressContent: () => (/* binding */ getAddressContent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const getAddressContent = ({ firstName, lastName, address1, address2, city, countryCode, stateOrProvince, postalCode, }) => {
    const addressParts = [address1, address2, city, stateOrProvince, countryCode, postalCode];
    const nonEmptyAddressParts = addressParts.filter(Boolean);
    const address = nonEmptyAddressParts.join(', ');
    if (!firstName || !lastName || !address) {
        return '';
    }
    return `${firstName} ${lastName}, ${address}`;
};
const SingleLineStaticAddress = ({ address }) => {
    const isValid = !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(address);
    return !isValid ? null : (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "vcard checkout-address--static", "data-test": "static-address" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", { className: "address-entry body-regular" }, getAddressContent(address))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleLineStaticAddress);


/***/ },

/***/ "./packages/core/src/app/common/error/isCartChangedError.ts"
/*!******************************************************************!*\
  !*** ./packages/core/src/app/common/error/isCartChangedError.ts ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isCartChangedError)
/* harmony export */ });
function isCartChangedError(error) {
    const requestError = error;
    return requestError.type === 'cart_changed';
}


/***/ },

/***/ "./packages/core/src/app/common/error/isCartStockPositionChangedError.ts"
/*!*******************************************************************************!*\
  !*** ./packages/core/src/app/common/error/isCartStockPositionChangedError.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isCartStockPositionChangedError)
/* harmony export */ });
function isCartStockPositionChangedError(error) {
    const requestError = error;
    return requestError.type === 'cart_stock_positions_changed';
}


/***/ },

/***/ "./packages/core/src/app/common/utility/isMobile.ts"
/*!**********************************************************!*\
  !*** ./packages/core/src/app/common/utility/isMobile.ts ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isMobile)
/* harmony export */ });
function isMobile() {
    return /Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent);
}


/***/ },

/***/ "./packages/core/src/app/coupon/utils/getRedeemableLabelId.ts"
/*!********************************************************************!*\
  !*** ./packages/core/src/app/coupon/utils/getRedeemableLabelId.ts ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRedeemableLabelId: () => (/* binding */ getRedeemableLabelId)
/* harmony export */ });
const getRedeemableLabelId = (disableGiftCertificate, disableCoupon) => {
    if (disableGiftCertificate) {
        return 'redeemable.coupon_text';
    }
    if (disableCoupon) {
        return 'redeemable.gift_certificate_text';
    }
    return 'redeemable.toggle_action';
};


/***/ },

/***/ "./packages/core/src/app/generated/paymentIntegrations/index.ts"
/*!**********************************************************************!*\
  !*** ./packages/core/src/app/generated/paymentIntegrations/index.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdyenV2PaymentMethod: () => (/* binding */ AdyenV2PaymentMethod),
/* harmony export */   AdyenV3PaymentMethod: () => (/* binding */ AdyenV3PaymentMethod),
/* harmony export */   AffirmPaymentMethod: () => (/* binding */ AffirmPaymentMethod),
/* harmony export */   AmazonPayV2PaymentMethod: () => (/* binding */ AmazonPayV2PaymentMethod),
/* harmony export */   ApplePayPaymentMethod: () => (/* binding */ ApplePayPaymentMethod),
/* harmony export */   BarclaycardPaymentMethod: () => (/* binding */ BarclaycardPaymentMethod),
/* harmony export */   BigCommercePaymentsAPMsPaymentMethod: () => (/* binding */ BigCommercePaymentsAPMsPaymentMethod),
/* harmony export */   BigCommercePaymentsCreditCardsPaymentMethod: () => (/* binding */ BigCommercePaymentsCreditCardsPaymentMethod),
/* harmony export */   BigCommercePaymentsFastlanePaymentMethod: () => (/* binding */ BigCommercePaymentsFastlanePaymentMethod),
/* harmony export */   BigCommercePaymentsPayLaterPaymentMethod: () => (/* binding */ BigCommercePaymentsPayLaterPaymentMethod),
/* harmony export */   BigCommercePaymentsPaymentMethod: () => (/* binding */ BigCommercePaymentsPaymentMethod),
/* harmony export */   BigCommercePaymentsRatePayPaymentMethod: () => (/* binding */ BigCommercePaymentsRatePayPaymentMethod),
/* harmony export */   BigCommercePaymentsVenmoPaymentMethod: () => (/* binding */ BigCommercePaymentsVenmoPaymentMethod),
/* harmony export */   BlueSnapDirectAlternativePaymentMethod: () => (/* binding */ BlueSnapDirectAlternativePaymentMethod),
/* harmony export */   BlueSnapDirectEcpPaymentMethod: () => (/* binding */ BlueSnapDirectEcpPaymentMethod),
/* harmony export */   BlueSnapDirectIdealPaymentMethod: () => (/* binding */ BlueSnapDirectIdealPaymentMethod),
/* harmony export */   BlueSnapDirectPayByBankPaymentMethod: () => (/* binding */ BlueSnapDirectPayByBankPaymentMethod),
/* harmony export */   BlueSnapDirectSepaPaymentMethod: () => (/* binding */ BlueSnapDirectSepaPaymentMethod),
/* harmony export */   BlueSnapV2PaymentMethod: () => (/* binding */ BlueSnapV2PaymentMethod),
/* harmony export */   BoltClientPaymentMethod: () => (/* binding */ BoltClientPaymentMethod),
/* harmony export */   BoltEmbeddedPaymentMethod: () => (/* binding */ BoltEmbeddedPaymentMethod),
/* harmony export */   BoltPaymentMethod: () => (/* binding */ BoltPaymentMethod),
/* harmony export */   BraintreeAchPaymentMethod: () => (/* binding */ BraintreeAchPaymentMethod),
/* harmony export */   BraintreeCreditCardsPaymentMethod: () => (/* binding */ BraintreeCreditCardsPaymentMethod),
/* harmony export */   BraintreeFastlanePaymentMethod: () => (/* binding */ BraintreeFastlanePaymentMethod),
/* harmony export */   BraintreeLocalPaymentMethod: () => (/* binding */ BraintreeLocalPaymentMethod),
/* harmony export */   BraintreePaypalPaymentMethod: () => (/* binding */ BraintreePaypalPaymentMethod),
/* harmony export */   BraintreeVenmoPaymentMethod: () => (/* binding */ BraintreeVenmoPaymentMethod),
/* harmony export */   CheckoutcomCustomPaymentMethod: () => (/* binding */ CheckoutcomCustomPaymentMethod),
/* harmony export */   ChequePaymentMethod: () => (/* binding */ ChequePaymentMethod),
/* harmony export */   ComponentRegistry: () => (/* binding */ ComponentRegistry),
/* harmony export */   GooglePayPaymentMethod: () => (/* binding */ GooglePayPaymentMethod),
/* harmony export */   HostedCreditCardPaymentMethod: () => (/* binding */ HostedCreditCardPaymentMethod),
/* harmony export */   HostedPaymentMethod: () => (/* binding */ HostedPaymentMethod),
/* harmony export */   KlarnaPaymentMethod: () => (/* binding */ KlarnaPaymentMethod),
/* harmony export */   KlarnaV2PaymentMethod: () => (/* binding */ KlarnaV2PaymentMethod),
/* harmony export */   MolliePaymentMethod: () => (/* binding */ MolliePaymentMethod),
/* harmony export */   MonerisPaymentMethod: () => (/* binding */ MonerisPaymentMethod),
/* harmony export */   OfflinePaymentMethod: () => (/* binding */ OfflinePaymentMethod),
/* harmony export */   PPSDKPaymentMethod: () => (/* binding */ PPSDKPaymentMethod),
/* harmony export */   PayPalCommerceAPMsPaymentMethod: () => (/* binding */ PayPalCommerceAPMsPaymentMethod),
/* harmony export */   PayPalCommerceCreditCardsPaymentMethod: () => (/* binding */ PayPalCommerceCreditCardsPaymentMethod),
/* harmony export */   PayPalCommerceCreditPaymentMethod: () => (/* binding */ PayPalCommerceCreditPaymentMethod),
/* harmony export */   PayPalCommerceFastlanePaymentMethod: () => (/* binding */ PayPalCommerceFastlanePaymentMethod),
/* harmony export */   PayPalCommercePaymentMethod: () => (/* binding */ PayPalCommercePaymentMethod),
/* harmony export */   PayPalCommerceVenmoPaymentMethod: () => (/* binding */ PayPalCommerceVenmoPaymentMethod),
/* harmony export */   PayPalPaymentsProPaymentMethod: () => (/* binding */ PayPalPaymentsProPaymentMethod),
/* harmony export */   PaypalCommerceRatePayPaymentMethod: () => (/* binding */ PaypalCommerceRatePayPaymentMethod),
/* harmony export */   PaypalExpressPaymentMethod: () => (/* binding */ PaypalExpressPaymentMethod),
/* harmony export */   SquareV2PaymentMethod: () => (/* binding */ SquareV2PaymentMethod),
/* harmony export */   StripeOCSPaymentMethod: () => (/* binding */ StripeOCSPaymentMethod),
/* harmony export */   StripeUPEPaymentMethod: () => (/* binding */ StripeUPEPaymentMethod),
/* harmony export */   StripeV3PaymentMethod: () => (/* binding */ StripeV3PaymentMethod),
/* harmony export */   VisaCheckoutPaymentMethod: () => (/* binding */ VisaCheckoutPaymentMethod),
/* harmony export */   WorldpayCreditCardPaymentMethod: () => (/* binding */ WorldpayCreditCardPaymentMethod),
/* harmony export */   WorldpayOpenBankingPaymentMethod: () => (/* binding */ WorldpayOpenBankingPaymentMethod)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/PaymentMethodId.ts");

const AdyenV2PaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | adyen-v2-payment-method */[__webpack_require__.e("vendors-node_modules_bigcommerce_checkout-sdk_dist_esm_integrations_adyen_js"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("adyen-v2-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/adyen-integration */ "./packages/adyen-integration/src/index.ts")).then(module => ({ default: module.AdyenV2PaymentMethod })));
const AdyenV3PaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | adyen-v3-payment-method */[__webpack_require__.e("vendors-node_modules_bigcommerce_checkout-sdk_dist_esm_integrations_adyen_js"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("adyen-v2-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/adyen-integration */ "./packages/adyen-integration/src/index.ts")).then(module => ({ default: module.AdyenV3PaymentMethod })));
const AffirmPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | affirm-payment-method */[__webpack_require__.e("vendors-node_modules_bigcommerce_checkout-sdk_dist_esm_integrations_affirm_js"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("affirm-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/affirm-integration */ "./packages/affirm-integration/src/index.ts")).then(module => ({ default: module.AffirmPaymentMethod })));
const AmazonPayV2PaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | amazon-pay-v2-payment-method */[__webpack_require__.e("vendor-async"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("amazon-pay-v2-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/amazon-pay-v2-integration */ "./packages/amazon-pay-v2-integration/src/index.ts")).then(module => ({ default: module.AmazonPayV2PaymentMethod })));
const ApplePayPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | apple-pay-payment-method */[__webpack_require__.e("vendors-node_modules_bigcommerce_checkout-sdk_dist_esm_integrations_apple-pay_js"), __webpack_require__.e("apple-pay-button")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/apple-pay-integration */ "./packages/apple-pay-integration/src/index.ts")).then(module => ({ default: module.ApplePayPaymentMethod })));
const BarclaycardPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | barclaycard-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("barclaycard-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/barclay-integration */ "./packages/barclay-integration/src/index.ts")).then(module => ({ default: module.BarclaycardPaymentMethod })));
const BigCommercePaymentsPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | big-commerce-payments-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("big-commerce-payments-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bigcommerce-payments-integration */ "./packages/bigcommerce-payments-integration/src/index.ts")).then(module => ({ default: module.BigCommercePaymentsPaymentMethod })));
const BigCommercePaymentsAPMsPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | big-commerce-payments-apms-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("big-commerce-payments-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bigcommerce-payments-integration */ "./packages/bigcommerce-payments-integration/src/index.ts")).then(module => ({ default: module.BigCommercePaymentsAPMsPaymentMethod })));
const BigCommercePaymentsCreditCardsPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | big-commerce-payments-credit-cards-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("big-commerce-payments-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bigcommerce-payments-integration */ "./packages/bigcommerce-payments-integration/src/index.ts")).then(module => ({ default: module.BigCommercePaymentsCreditCardsPaymentMethod })));
const BigCommercePaymentsFastlanePaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | big-commerce-payments-fastlane-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("big-commerce-payments-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bigcommerce-payments-integration */ "./packages/bigcommerce-payments-integration/src/index.ts")).then(module => ({ default: module.BigCommercePaymentsFastlanePaymentMethod })));
const BigCommercePaymentsPayLaterPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | big-commerce-payments-pay-later-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("big-commerce-payments-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bigcommerce-payments-integration */ "./packages/bigcommerce-payments-integration/src/index.ts")).then(module => ({ default: module.BigCommercePaymentsPayLaterPaymentMethod })));
const BigCommercePaymentsVenmoPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | big-commerce-payments-venmo-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("big-commerce-payments-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bigcommerce-payments-integration */ "./packages/bigcommerce-payments-integration/src/index.ts")).then(module => ({ default: module.BigCommercePaymentsVenmoPaymentMethod })));
const BigCommercePaymentsRatePayPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | big-commerce-payments-rate-pay-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("big-commerce-payments-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bigcommerce-payments-integration */ "./packages/bigcommerce-payments-integration/src/index.ts")).then(module => ({ default: module.BigCommercePaymentsRatePayPaymentMethod })));
const BlueSnapDirectEcpPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | blue-snap-direct-ecp-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("blue-snap-v2-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bluesnap-direct-integration */ "./packages/bluesnap-direct-integration/src/index.ts")).then(module => ({ default: module.BlueSnapDirectEcpPaymentMethod })));
const BlueSnapDirectAlternativePaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | blue-snap-direct-alternative-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("blue-snap-v2-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bluesnap-direct-integration */ "./packages/bluesnap-direct-integration/src/index.ts")).then(module => ({ default: module.BlueSnapDirectAlternativePaymentMethod })));
const BlueSnapDirectSepaPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | blue-snap-direct-sepa-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("blue-snap-v2-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bluesnap-direct-integration */ "./packages/bluesnap-direct-integration/src/index.ts")).then(module => ({ default: module.BlueSnapDirectSepaPaymentMethod })));
const BlueSnapDirectIdealPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | blue-snap-direct-ideal-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("blue-snap-v2-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bluesnap-direct-integration */ "./packages/bluesnap-direct-integration/src/index.ts")).then(module => ({ default: module.BlueSnapDirectIdealPaymentMethod })));
const BlueSnapV2PaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | blue-snap-v2-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("blue-snap-v2-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bluesnap-direct-integration */ "./packages/bluesnap-direct-integration/src/index.ts")).then(module => ({ default: module.BlueSnapV2PaymentMethod })));
const BlueSnapDirectPayByBankPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | blue-snap-direct-pay-by-bank-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("blue-snap-v2-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bluesnap-direct-integration */ "./packages/bluesnap-direct-integration/src/index.ts")).then(module => ({ default: module.BlueSnapDirectPayByBankPaymentMethod })));
const BoltClientPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | bolt-client-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("bolt-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bolt-integration */ "./packages/bolt-integration/src/index.ts")).then(module => ({ default: module.BoltClientPaymentMethod })));
const BoltEmbeddedPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | bolt-embedded-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("bolt-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bolt-integration */ "./packages/bolt-integration/src/index.ts")).then(module => ({ default: module.BoltEmbeddedPaymentMethod })));
const BoltPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | bolt-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("bolt-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/bolt-integration */ "./packages/bolt-integration/src/index.ts")).then(module => ({ default: module.BoltPaymentMethod })));
const BraintreeAchPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | braintree-ach-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_wallet-button-integration_src_WalletButtonPaymentMethodComponent_tsx"), __webpack_require__.e("braintree-ach-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/braintree-integration */ "./packages/braintree-integration/src/index.ts")).then(module => ({ default: module.BraintreeAchPaymentMethod })));
const BraintreeFastlanePaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | braintree-fastlane-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_wallet-button-integration_src_WalletButtonPaymentMethodComponent_tsx"), __webpack_require__.e("braintree-ach-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/braintree-integration */ "./packages/braintree-integration/src/index.ts")).then(module => ({ default: module.BraintreeFastlanePaymentMethod })));
const BraintreeCreditCardsPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | braintree-credit-cards-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_wallet-button-integration_src_WalletButtonPaymentMethodComponent_tsx"), __webpack_require__.e("braintree-ach-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/braintree-integration */ "./packages/braintree-integration/src/index.ts")).then(module => ({ default: module.BraintreeCreditCardsPaymentMethod })));
const BraintreeLocalPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | braintree-local-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_wallet-button-integration_src_WalletButtonPaymentMethodComponent_tsx"), __webpack_require__.e("braintree-ach-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/braintree-integration */ "./packages/braintree-integration/src/index.ts")).then(module => ({ default: module.BraintreeLocalPaymentMethod })));
const BraintreePaypalPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | braintree-paypal-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_wallet-button-integration_src_WalletButtonPaymentMethodComponent_tsx"), __webpack_require__.e("braintree-ach-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/braintree-integration */ "./packages/braintree-integration/src/index.ts")).then(module => ({ default: module.BraintreePaypalPaymentMethod })));
const VisaCheckoutPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | visa-checkout-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_wallet-button-integration_src_WalletButtonPaymentMethodComponent_tsx"), __webpack_require__.e("braintree-ach-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/braintree-integration */ "./packages/braintree-integration/src/index.ts")).then(module => ({ default: module.VisaCheckoutPaymentMethod })));
const BraintreeVenmoPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | braintree-venmo-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_wallet-button-integration_src_WalletButtonPaymentMethodComponent_tsx"), __webpack_require__.e("braintree-ach-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/braintree-integration */ "./packages/braintree-integration/src/index.ts")).then(module => ({ default: module.BraintreeVenmoPaymentMethod })));
const CheckoutcomCustomPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | checkoutcom-custom-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("checkoutcom-custom-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/checkoutcom-integration */ "./packages/checkoutcom-integration/src/index.ts")).then(module => ({ default: module.CheckoutcomCustomPaymentMethod })));
const ChequePaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | cheque-payment-method */[__webpack_require__.e("vendor-async"), __webpack_require__.e("cheque-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/cheque-payment-integration */ "./packages/cheque-payment-integration/src/index.ts")).then(module => ({ default: module.ChequePaymentMethod })));
const GooglePayPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | google-pay-payment-method */[__webpack_require__.e("vendor-async"), __webpack_require__.e("packages_wallet-button-integration_src_WalletButtonPaymentMethodComponent_tsx"), __webpack_require__.e("google-pay-button")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/google-pay-integration */ "./packages/google-pay-integration/src/index.ts")).then(module => ({ default: module.GooglePayPaymentMethod })));
const HostedCreditCardPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | hosted-credit-card-payment-method */[__webpack_require__.e("vendor-async"), __webpack_require__.e("vendors-node_modules_bigcommerce_checkout-sdk_dist_esm_integrations_cybersource_js-node_modul-fec2a9"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardComponent_tsx"), __webpack_require__.e("packages_core_src_app_payment_StoreInstrumentFieldset_StoreInstrumentFieldset_tsx-packages_co-47c09e"), __webpack_require__.e("hosted-credit-card-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/hosted-credit-card-integration */ "./packages/hosted-credit-card-integration/src/index.ts")).then(module => ({ default: module.HostedCreditCardPaymentMethod })));
const HostedPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | hosted-payment-method */[__webpack_require__.e("vendors-node_modules_bigcommerce_checkout-sdk_dist_esm_integrations_humm_js-node_modules_bigc-643913"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_core_src_app_payment_StoreInstrumentFieldset_StoreInstrumentFieldset_tsx-packages_co-47c09e"), __webpack_require__.e("hosted-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/hosted-payment-integration */ "./packages/hosted-payment-integration/src/index.ts")).then(module => ({ default: module.HostedPaymentMethod })));
const KlarnaPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | klarna-payment-method */[__webpack_require__.e("vendors-node_modules_bigcommerce_checkout-sdk_dist_esm_integrations_klarna_js"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("klarna-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/klarna-integration */ "./packages/klarna-integration/src/index.ts")).then(module => ({ default: module.KlarnaPaymentMethod })));
const KlarnaV2PaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | klarna-v2-payment-method */[__webpack_require__.e("vendors-node_modules_bigcommerce_checkout-sdk_dist_esm_integrations_klarna_js"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("klarna-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/klarna-integration */ "./packages/klarna-integration/src/index.ts")).then(module => ({ default: module.KlarnaV2PaymentMethod })));
const MolliePaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | mollie-payment-method */[__webpack_require__.e("vendors-node_modules_bigcommerce_checkout-sdk_dist_esm_integrations_mollie_js"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("mollie-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/mollie-integration */ "./packages/mollie-integration/src/index.ts")).then(module => ({ default: module.MolliePaymentMethod })));
const MonerisPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | moneris-payment-method */[__webpack_require__.e("vendors-node_modules_bigcommerce_checkout-sdk_dist_esm_integrations_moneris_js"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("moneris-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/moneris-integration */ "./packages/moneris-integration/src/index.ts")).then(module => ({ default: module.MonerisPaymentMethod })));
const OfflinePaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | offline-payment-method */[__webpack_require__.e("vendor-async"), __webpack_require__.e("offline-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/offline-payment-integration */ "./packages/offline-payment-integration/src/index.ts")).then(module => ({ default: module.OfflinePaymentMethod })));
const PayPalCommerceAPMsPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | pay-pal-commerce-apms-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("pay-pal-commerce-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/paypal-commerce-integration */ "./packages/paypal-commerce-integration/src/index.ts")).then(module => ({ default: module.PayPalCommerceAPMsPaymentMethod })));
const PayPalCommerceCreditPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | pay-pal-commerce-credit-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("pay-pal-commerce-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/paypal-commerce-integration */ "./packages/paypal-commerce-integration/src/index.ts")).then(module => ({ default: module.PayPalCommerceCreditPaymentMethod })));
const PayPalCommerceCreditCardsPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | pay-pal-commerce-credit-cards-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("pay-pal-commerce-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/paypal-commerce-integration */ "./packages/paypal-commerce-integration/src/index.ts")).then(module => ({ default: module.PayPalCommerceCreditCardsPaymentMethod })));
const PayPalCommerceFastlanePaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | pay-pal-commerce-fastlane-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("pay-pal-commerce-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/paypal-commerce-integration */ "./packages/paypal-commerce-integration/src/index.ts")).then(module => ({ default: module.PayPalCommerceFastlanePaymentMethod })));
const PayPalCommercePaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | pay-pal-commerce-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("pay-pal-commerce-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/paypal-commerce-integration */ "./packages/paypal-commerce-integration/src/index.ts")).then(module => ({ default: module.PayPalCommercePaymentMethod })));
const PayPalCommerceVenmoPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | pay-pal-commerce-venmo-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("pay-pal-commerce-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/paypal-commerce-integration */ "./packages/paypal-commerce-integration/src/index.ts")).then(module => ({ default: module.PayPalCommerceVenmoPaymentMethod })));
const PaypalCommerceRatePayPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | paypal-commerce-rate-pay-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_checkout-button-integration_src_CheckoutButton_tsx-packages_payment-integration-api_-a1f35d"), __webpack_require__.e("pay-pal-commerce-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/paypal-commerce-integration */ "./packages/paypal-commerce-integration/src/index.ts")).then(module => ({ default: module.PaypalCommerceRatePayPaymentMethod })));
const PaypalExpressPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | paypal-express-payment-method */[__webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("paypal-express-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/paypal-express-integration */ "./packages/paypal-express-integration/src/index.ts")).then(module => ({ default: module.PaypalExpressPaymentMethod })));
const PayPalPaymentsProPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | pay-pal-payments-pro-payment-method */[__webpack_require__.e("vendor-async"), __webpack_require__.e("vendors-node_modules_bigcommerce_checkout-sdk_dist_esm_integrations_paypal-pro_js"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardComponent_tsx"), __webpack_require__.e("pay-pal-payments-pro-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/paypal-payments-pro-integration */ "./packages/paypal-payments-pro-integration/src/index.ts")).then(module => ({ default: module.PayPalPaymentsProPaymentMethod })));
const PPSDKPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | ppsdkpayment-method */[__webpack_require__.e("vendor-async"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardComponent_tsx"), __webpack_require__.e("ppsdkpayment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/ppsdk-integration */ "./packages/ppsdk-integration/src/index.ts")).then(module => ({ default: module.PPSDKPaymentMethod })));
const SquareV2PaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | square-v2-payment-method */[__webpack_require__.e("vendors-node_modules_bigcommerce_checkout-sdk_dist_esm_integrations_squarev2_js"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("square-v2-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/squarev2-integration */ "./packages/squarev2-integration/src/index.ts")).then(module => ({ default: module.SquareV2PaymentMethod })));
const StripeOCSPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | stripe-ocspayment-method */[__webpack_require__.e("vendor-async"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("stripe-ocspayment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/stripe-integration */ "./packages/stripe-integration/src/index.ts")).then(module => ({ default: module.StripeOCSPaymentMethod })));
const StripeUPEPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | stripe-upepayment-method */[__webpack_require__.e("vendor-async"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("stripe-ocspayment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/stripe-integration */ "./packages/stripe-integration/src/index.ts")).then(module => ({ default: module.StripeUPEPaymentMethod })));
const StripeV3PaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | stripe-v3-payment-method */[__webpack_require__.e("vendor-async"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_AccountInstrumentFieldset_AccountInstrumentFie-0292a0"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_hosted-widget-integration_src_HostedWidgetPaymentComponent_tsx"), __webpack_require__.e("stripe-ocspayment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/stripe-integration */ "./packages/stripe-integration/src/index.ts")).then(module => ({ default: module.StripeV3PaymentMethod })));
const WorldpayCreditCardPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | worldpay-credit-card-payment-method */[__webpack_require__.e("vendors-node_modules_bigcommerce_checkout-sdk_dist_esm_integrations_worldpayaccess_js"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("worldpay-credit-card-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/worldpay-access-integration */ "./packages/worldpay-access-integration/src/index.ts")).then(module => ({ default: module.WorldpayCreditCardPaymentMethod })));
const WorldpayOpenBankingPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() | worldpay-open-banking-payment-method */[__webpack_require__.e("vendors-node_modules_bigcommerce_checkout-sdk_dist_esm_integrations_worldpayaccess_js"), __webpack_require__.e("packages_instrument-utils_src_storedInstrument_ManageInstrumentsModal_ManageInstrumentsModal_-939a6c"), __webpack_require__.e("packages_instrument-utils_src_guards_isInstrumentCardCodeRequiredSelector_ts-packages_instrum-8e6504"), __webpack_require__.e("packages_instrument-utils_src_creditCard_CreditCardCodeTooltip_tsx-packages_ui_src_icon_IconH-b47787"), __webpack_require__.e("packages_credit-card-integration_src_CreditCardPaymentMethodContainer_tsx"), __webpack_require__.e("packages_hosted-credit-card-integration_src_components_HostedCreditCardFieldset_HostedCreditC-cf449c"), __webpack_require__.e("worldpay-credit-card-payment-method")]).then(__webpack_require__.bind(__webpack_require__, /*! @bigcommerce/checkout/worldpay-access-integration */ "./packages/worldpay-access-integration/src/index.ts")).then(module => ({ default: module.WorldpayOpenBankingPaymentMethod })));


const ComponentRegistry = {
    'AdyenV2PaymentMethod': [
        { "gateway": "adyenv2" }
    ],
    'AdyenV3PaymentMethod': [
        { "gateway": "adyenv3" }
    ],
    'AffirmPaymentMethod': [
        { "id": "affirm" }
    ],
    'AmazonPayV2PaymentMethod': [
        { "id": "amazonpay" }
    ],
    'ApplePayPaymentMethod': [
        { "id": "applepay" }
    ],
    'BarclaycardPaymentMethod': [
        { "gateway": "barclaycard" }
    ],
    'BigCommercePaymentsAPMsPaymentMethod': [
        { "gateway": "bigcommerce_payments_apms" }
    ],
    'BigCommercePaymentsCreditCardsPaymentMethod': [
        { "id": "bigcommerce_payments_creditcards" }
    ],
    'BigCommercePaymentsFastlanePaymentMethod': [
        { "id": "bigcommerce_payments_fastlane" }
    ],
    'BigCommercePaymentsPayLaterPaymentMethod': [
        { "id": "bigcommerce_payments_paylater" }
    ],
    'BigCommercePaymentsPaymentMethod': [
        { "id": "bigcommerce_payments" }
    ],
    'BigCommercePaymentsRatePayPaymentMethod': [
        { "gateway": "bigcommerce_payments_apms", "id": "ratepay" }
    ],
    'BigCommercePaymentsVenmoPaymentMethod': [
        { "id": "bigcommerce_payments_venmo" }
    ],
    'BlueSnapDirectAlternativePaymentMethod': [
        { "gateway": "bluesnapdirect" }
    ],
    'BlueSnapDirectEcpPaymentMethod': [
        { "id": "ecp", "gateway": "bluesnapdirect" }
    ],
    'BlueSnapDirectIdealPaymentMethod': [
        { "id": "ideal", "gateway": "bluesnapdirect" }
    ],
    'BlueSnapDirectPayByBankPaymentMethod': [
        { "id": "pay_by_bank", "gateway": "bluesnapdirect" }
    ],
    'BlueSnapDirectSepaPaymentMethod': [
        { "id": "sepa_direct_debit", "gateway": "bluesnapdirect" }
    ],
    'BlueSnapV2PaymentMethod': [
        { "gateway": "bluesnapv2" }
    ],
    'BoltPaymentMethod': [
        { "id": "bolt" }
    ],
    'BraintreeAchPaymentMethod': [
        { "id": "braintreeach" }
    ],
    'BraintreeCreditCardsPaymentMethod': [
        { "id": "braintree" }
    ],
    'BraintreeFastlanePaymentMethod': [
        { "id": "braintreeacceleratedcheckout" }
    ],
    'BraintreeLocalPaymentMethod': [
        { "gateway": "braintreelocalmethods" }
    ],
    'BraintreePaypalPaymentMethod': [
        { "id": "braintreepaypal" },
        { "id": "braintreepaypalcredit" }
    ],
    'BraintreeVenmoPaymentMethod': [
        { "id": "braintreevenmo" }
    ],
    'CheckoutcomCustomPaymentMethod': [
        { "gateway": "checkoutcom" }
    ],
    'ChequePaymentMethod': [
        { "id": "cheque", "type": "PAYMENT_TYPE_OFFLINE" }
    ],
    'GooglePayPaymentMethod': [
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].AdyenV2GooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].AdyenV3GooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].AuthorizeNetGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].BNZGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].BraintreeGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].PayPalCommerceGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].BigCommercePaymentsGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].CheckoutcomGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].CybersourceV2GooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].OrbitalGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].StripeGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].StripeUPEGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].WorldpayAccessGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].TdOnlineMartGooglePay },
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].StripeOCSGooglePay }
    ],
    'HostedCreditCardPaymentMethod': [
        { "id": "hosted-credit-card" },
        { "id": "credit_card", "gateway": "bluesnapdirect" },
        { "id": "credit_card", "gateway": "checkoutcom" },
        { "id": "tdonlinemart" }
    ],
    'HostedPaymentMethod': [
        { "gateway": "afterpay" },
        { "id": "afterpay" },
        { "gateway": "clearpay" },
        { "id": "clearpay" },
        { "id": "quadpay" },
        { "id": "sezzle" },
        { "id": "zip" }
    ],
    'KlarnaPaymentMethod': [
        { "id": "klarna" }
    ],
    'KlarnaV2PaymentMethod': [
        { "gateway": "klarna" }
    ],
    'MolliePaymentMethod': [
        { "gateway": "mollie" },
        { "gateway": "mollie", "id": "applepay" }
    ],
    'MonerisPaymentMethod': [
        { "id": "moneris" }
    ],
    'OfflinePaymentMethod': [
        { "type": "PAYMENT_TYPE_OFFLINE" }
    ],
    'PayPalCommerceAPMsPaymentMethod': [
        { "gateway": "paypalcommercealternativemethods" }
    ],
    'PayPalCommerceCreditCardsPaymentMethod': [
        { "id": "paypalcommercecreditcards" }
    ],
    'PayPalCommerceCreditPaymentMethod': [
        { "id": "paypalcommercecredit" }
    ],
    'PayPalCommerceFastlanePaymentMethod': [
        { "id": "paypalcommerceacceleratedcheckout" }
    ],
    'PayPalCommercePaymentMethod': [
        { "id": "paypalcommerce" }
    ],
    'PaypalCommerceRatePayPaymentMethod': [
        { "gateway": "paypalcommercealternativemethods", "id": "ratepay" }
    ],
    'PayPalCommerceVenmoPaymentMethod': [
        { "id": "paypalcommercevenmo" }
    ],
    'PaypalExpressPaymentMethod': [
        { "id": "paypalexpress" },
        { "id": "paypalexpresscredit" }
    ],
    'PayPalPaymentsProPaymentMethod': [
        { "id": "paypal" }
    ],
    'PPSDKPaymentMethod': [
        { "type": "PAYMENT_TYPE_SDK" }
    ],
    'SquareV2PaymentMethod': [
        { "id": "squarev2" }
    ],
    'StripeOCSPaymentMethod': [
        { "gateway": "stripeocs", "id": "optimized_checkout" },
        { "gateway": "stripeocs", "id": "checkout_session" }
    ],
    'StripeUPEPaymentMethod': [
        { "gateway": "stripeupe" },
        { "gateway": "stripeupe", "id": "klarna" }
    ],
    'StripeV3PaymentMethod': [
        { "gateway": "stripev3" }
    ],
    'VisaCheckoutPaymentMethod': [
        { "id": _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_1__["default"].BraintreeVisaCheckout }
    ],
    'WorldpayCreditCardPaymentMethod': [
        { "id": "credit_card", "gateway": "worldpayaccess" },
        { "id": "worldpayaccess" }
    ],
    'WorldpayOpenBankingPaymentMethod': [
        { "id": "open_banking", "gateway": "worldpayaccess" }
    ]
};


/***/ },

/***/ "./packages/core/src/app/order/getOrderSummaryItemImage.tsx"
/*!******************************************************************!*\
  !*** ./packages/core/src/app/order/getOrderSummaryItemImage.tsx ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOrderSummaryItemImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function getOrderSummaryItemImage(item) {
    if (!item.imageUrl) {
        return;
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { alt: "", "data-test": "cart-item-image", src: item.imageUrl });
}


/***/ },

/***/ "./packages/core/src/app/payment/AdditionalPaymentField.tsx"
/*!******************************************************************!*\
  !*** ./packages/core/src/app/payment/AdditionalPaymentField.tsx ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextInput/TextInput.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");
/* harmony import */ var _AdditionalPaymentFieldSessionStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AdditionalPaymentFieldSessionStorage */ "./packages/core/src/app/payment/AdditionalPaymentFieldSessionStorage.ts");




const AdditionalPaymentField = ({ label, isRequired, }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({ field }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, field, { id: "additionalPaymentField", onChange: (event) => {
            field.onChange(event);
            _AdditionalPaymentFieldSessionStorage__WEBPACK_IMPORTED_MODULE_4__.AdditionalPaymentFieldSessionStorage.set(event.target.value);
        }, testId: "additionalPaymentField-input" }))), []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "dynamic-form-field" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "additionalPaymentField", input: renderInput, labelContent: react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                label,
                !isRequired && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "common.optional_text" }))))), name: "additionalPaymentField" })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdditionalPaymentField);


/***/ },

/***/ "./packages/core/src/app/payment/AdditionalPaymentFieldSessionStorage.ts"
/*!*******************************************************************************!*\
  !*** ./packages/core/src/app/payment/AdditionalPaymentFieldSessionStorage.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdditionalPaymentFieldSessionStorage: () => (/* binding */ AdditionalPaymentFieldSessionStorage)
/* harmony export */ });
class AdditionalPaymentFieldSessionStorage {
    static get() {
        var _a;
        return (_a = sessionStorage.getItem(this.KEY)) !== null && _a !== void 0 ? _a : '';
    }
    static set(value) {
        if (value === '') {
            sessionStorage.removeItem(this.KEY);
            return;
        }
        sessionStorage.setItem(this.KEY, value);
    }
    static remove() {
        sessionStorage.removeItem(this.KEY);
    }
}
AdditionalPaymentFieldSessionStorage.KEY = 'additionalPaymentField';


/***/ },

/***/ "./packages/core/src/app/payment/CartStockPositionsChangedItem.tsx"
/*!*************************************************************************!*\
  !*** ./packages/core/src/app/payment/CartStockPositionsChangedItem.tsx ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _order_getOrderSummaryItemImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order/getOrderSummaryItemImage */ "./packages/core/src/app/order/getOrderSummaryItemImage.tsx");



const CartStockPositionsChangedItem = ({ item, }) => {
    var _a, _b, _c;
    const stock = item.stockPosition;
    const quantityOnHand = (_a = stock === null || stock === void 0 ? void 0 : stock.quantityOnHand) !== null && _a !== void 0 ? _a : 0;
    const quantityBackordered = (_b = stock === null || stock === void 0 ? void 0 : stock.quantityBackordered) !== null && _b !== void 0 ? _b : 0;
    const backorderMessage = (_c = stock === null || stock === void 0 ? void 0 : stock.backorderMessage) !== null && _c !== void 0 ? _c : '';
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "productList-item", "data-test": "cart-stock-positions-changed-item" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "product" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", { className: "product-column product-figure" }, (0,_order_getOrderSummaryItemImage__WEBPACK_IMPORTED_MODULE_2__["default"])(item)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "product-column product-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "product-title optimizedCheckout-contentPrimary body-regular", "data-test": "cart-item-product-title" }, item.name),
                item.options && item.options.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "product-options optimizedCheckout-contentSecondary sub-text-medium", "data-test": "cart-item-product-options" }, item.options.map((option, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "product-option", "data-test": "cart-item-product-option", key: index },
                    option.name,
                    " ",
                    option.value)))))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cart-item-quantity" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "optimizedCheckout-contentPrimary body-regular", "data-test": "cart-item-quantity" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { data: { quantity: item.quantity }, id: "cart.qty_label" }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cart-stock-position-details optimizedCheckout-contentSecondary sub-text-medium", "data-test": "cart-item-stock-position" },
                quantityOnHand > 0 && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { data: { count: quantityOnHand }, id: "cart.ready_to_ship_count_text" }))),
                quantityBackordered > 0 && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "cart-stock-position-backorder" },
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { data: { count: quantityBackordered }, id: "cart.backorder_count_text" }))),
                backorderMessage && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "cart-stock-position-backorder-message" }, backorderMessage))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartStockPositionsChangedItem);


/***/ },

/***/ "./packages/core/src/app/payment/CartStockPositionsChangedItemList.tsx"
/*!*****************************************************************************!*\
  !*** ./packages/core/src/app/payment/CartStockPositionsChangedItemList.tsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CartStockPositionsChangedItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartStockPositionsChangedItem */ "./packages/core/src/app/payment/CartStockPositionsChangedItem.tsx");


const CartStockPositionsChangedItemList = ({ items }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "productList", "data-test": "cart-stock-positions-changed-items" }, items.map((item) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CartStockPositionsChangedItem__WEBPACK_IMPORTED_MODULE_1__["default"], { item: item, key: item.id })))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartStockPositionsChangedItemList);


/***/ },

/***/ "./packages/core/src/app/payment/CartStockPositionsChangedModal.tsx"
/*!**************************************************************************!*\
  !*** ./packages/core/src/app/payment/CartStockPositionsChangedModal.tsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/button/Button.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/Modal.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/ModalHeader.tsx");
/* harmony import */ var _CartStockPositionsChangedItemList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CartStockPositionsChangedItemList */ "./packages/core/src/app/payment/CartStockPositionsChangedItemList.tsx");
/* harmony import */ var _CartStockPositionsChangedMultiConsignmentContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CartStockPositionsChangedMultiConsignmentContent */ "./packages/core/src/app/payment/CartStockPositionsChangedMultiConsignmentContent.tsx");
/* harmony import */ var _cartStockPositionsChangedUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cartStockPositionsChangedUtils */ "./packages/core/src/app/payment/cartStockPositionsChangedUtils.ts");








const CartStockPositionsChangedModal = ({ cart, changedLineItemIds, consignments, isOpen, onPlaceOrder, onRequestClose, }) => {
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useThemeContext)();
    const changedItemsToShow = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_cartStockPositionsChangedUtils__WEBPACK_IMPORTED_MODULE_9__.getChangedItemsToShow)(cart, changedLineItemIds), [cart, changedLineItemIds]);
    const groupedByConsignment = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_cartStockPositionsChangedUtils__WEBPACK_IMPORTED_MODULE_9__.groupChangedItemsByConsignment)(cart, consignments, changedItemsToShow), [cart, consignments, changedItemsToShow]);
    const modalContent = groupedByConsignment ? (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CartStockPositionsChangedMultiConsignmentContent__WEBPACK_IMPORTED_MODULE_8__["default"], { consignmentGroups: groupedByConsignment })) : (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CartStockPositionsChangedItemList__WEBPACK_IMPORTED_MODULE_7__["default"], { items: changedItemsToShow }));
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { additionalModalClassName: classnames__WEBPACK_IMPORTED_MODULE_0___default()('cart-stock-positions-changed-modal', {
            themeV2,
        }), footer: react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { className: "body-medium", onClick: onRequestClose, variant: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__.ButtonVariant.Secondary },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "common.back_action" })),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { className: "body-medium", onClick: onPlaceOrder, variant: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__.ButtonVariant.Primary },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.place_order_action" }))), header: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { additionalClassName: "header" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "cart.backorder_quantities_changed_heading" })), isOpen: isOpen, onRequestClose: onRequestClose }, modalContent));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartStockPositionsChangedModal);


/***/ },

/***/ "./packages/core/src/app/payment/CartStockPositionsChangedMultiConsignmentContent.tsx"
/*!********************************************************************************************!*\
  !*** ./packages/core/src/app/payment/CartStockPositionsChangedMultiConsignmentContent.tsx ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _address_SingleLineStaticAddress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../address/SingleLineStaticAddress */ "./packages/core/src/app/address/SingleLineStaticAddress.tsx");
/* harmony import */ var _CartStockPositionsChangedItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CartStockPositionsChangedItemList */ "./packages/core/src/app/payment/CartStockPositionsChangedItemList.tsx");




const CartStockPositionsChangedMultiConsignmentContent = ({ consignmentGroups }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cart-stock-positions-changed-modal-groups", "data-test": "cart-stock-positions-changed-groups" }, consignmentGroups.map(({ consignment, consignmentNumber, items }) => {
    const address = (0,_address_SingleLineStaticAddress__WEBPACK_IMPORTED_MODULE_2__.getAddressContent)(consignment.shippingAddress);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cart-stock-positions-changed-modal-group", "data-test": "cart-stock-positions-changed-group", key: consignment.id },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "cart-stock-positions-changed-modal-destination", "data-test": "cart-stock-positions-changed-destination" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "body-bold" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { data: { consignmentNumber }, id: "cart.cart_stock_modal_destination" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "body-medium" }, ` (${address})`)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CartStockPositionsChangedItemList__WEBPACK_IMPORTED_MODULE_3__["default"], { items: items })));
})));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartStockPositionsChangedMultiConsignmentContent);


/***/ },

/***/ "./packages/core/src/app/payment/InvoicePaymentCommentField.tsx"
/*!**********************************************************************!*\
  !*** ./packages/core/src/app/payment/InvoicePaymentCommentField.tsx ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextArea/TextArea.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");
/* harmony import */ var _InvoicePaymentCommentSessionStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InvoicePaymentCommentSessionStorage */ "./packages/core/src/app/payment/InvoicePaymentCommentSessionStorage.ts");




const InvoicePaymentCommentField = () => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({ field }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, field, { id: "invoicePaymentComment", onChange: (event) => {
            field.onChange(event);
            _InvoicePaymentCommentSessionStorage__WEBPACK_IMPORTED_MODULE_4__.InvoicePaymentCommentSessionStorage.set(event.target.value);
        }, rows: 4, testId: "invoicePaymentComment-input" }))), []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "dynamic-form-field" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "invoicePaymentComment", input: renderInput, labelContent: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.invoice_payment_comment_label" }), name: "invoicePaymentComment" })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvoicePaymentCommentField);


/***/ },

/***/ "./packages/core/src/app/payment/InvoicePaymentCommentSessionStorage.ts"
/*!******************************************************************************!*\
  !*** ./packages/core/src/app/payment/InvoicePaymentCommentSessionStorage.ts ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvoicePaymentCommentSessionStorage: () => (/* binding */ InvoicePaymentCommentSessionStorage)
/* harmony export */ });
class InvoicePaymentCommentSessionStorage {
    static get() {
        var _a;
        return (_a = sessionStorage.getItem(this.KEY)) !== null && _a !== void 0 ? _a : '';
    }
    static set(value) {
        if (value === '') {
            sessionStorage.removeItem(this.KEY);
            return;
        }
        sessionStorage.setItem(this.KEY, value);
    }
    static remove() {
        sessionStorage.removeItem(this.KEY);
    }
}
InvoicePaymentCommentSessionStorage.KEY = 'invoicePaymentComment';


/***/ },

/***/ "./packages/core/src/app/payment/NoPaymentMethods.tsx"
/*!************************************************************!*\
  !*** ./packages/core/src/app/payment/NoPaymentMethods.tsx ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoPaymentMethods: () => (/* binding */ NoPaymentMethods)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/LoadingSkeleton/ChecklistSkeleton.tsx");


const NoPaymentMethods = ({ message }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_1__["default"], { additionalClassName: "noPaymentMethods-skeleton", isLoading: false, rows: 2 },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "noPaymentMethods-panel optimizedCheckout-overlay" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { "aria-live": "polite", className: "noPaymentMethods-panel-message optimizedCheckout-primaryContent", role: "alert" }, message))));


/***/ },

/***/ "./packages/core/src/app/payment/Payment.tsx"
/*!***************************************************!*\
  !*** ./packages/core/src/app/payment/Payment.tsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   mapToPaymentProps: () => (/* binding */ mapToPaymentProps)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_afterpay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/afterpay */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/afterpay.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_bluesnap_direct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/bluesnap-direct */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/bluesnap-direct.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_cba_mpgs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/cba-mpgs */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/cba-mpgs.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/checkoutcom-custom */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/checkoutcom-custom.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_clearpay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/clearpay */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/clearpay.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_offsite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/offsite */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/offsite.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_paypal_express__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/paypal-express */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/paypal-express.js");
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_sagepay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/sagepay */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/sagepay.js");
/* harmony import */ var _bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/memoize */ "./node_modules/@bigcommerce/memoize/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/capabilities/CapabilitiesContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/LoadingSkeleton/ChecklistSkeleton.tsx");
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../analytics */ "./packages/core/src/app/analytics/withAnalytics.ts");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _common_error__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/error */ "./packages/core/src/app/common/error/ErrorModal.tsx");
/* harmony import */ var _common_error__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/error */ "./packages/core/src/app/common/error/isCartChangedError.ts");
/* harmony import */ var _common_error__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/error */ "./packages/core/src/app/common/error/isErrorWithType.ts");
/* harmony import */ var _common_error__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../common/error */ "./packages/core/src/app/common/error/isCartStockPositionChangedError.ts");
/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../common/utility */ "./packages/core/src/app/common/utility/emptyData.ts");
/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../common/utility */ "./packages/core/src/app/common/utility/isExperimentEnabled.ts");
/* harmony import */ var _termsConditions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../termsConditions */ "./packages/core/src/app/termsConditions/TermsConditionsField.tsx");
/* harmony import */ var _CartStockPositionsChangedModal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./CartStockPositionsChangedModal */ "./packages/core/src/app/payment/CartStockPositionsChangedModal.tsx");
/* harmony import */ var _InvoicePaymentCommentSessionStorage__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./InvoicePaymentCommentSessionStorage */ "./packages/core/src/app/payment/InvoicePaymentCommentSessionStorage.ts");
/* harmony import */ var _mapSubmitOrderErrorMessage__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mapSubmitOrderErrorMessage */ "./packages/core/src/app/payment/mapSubmitOrderErrorMessage.ts");
/* harmony import */ var _mapToOrderRequestBody__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mapToOrderRequestBody */ "./packages/core/src/app/payment/mapToOrderRequestBody.ts");
/* harmony import */ var _PaymentContext__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./PaymentContext */ "./packages/core/src/app/payment/PaymentContext.tsx");
/* harmony import */ var _PaymentForm__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./PaymentForm */ "./packages/core/src/app/payment/PaymentForm.tsx");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodProviderType.ts");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/getUniquePaymentMethodId.ts");
/* harmony import */ var _paymentMethodFilters__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./paymentMethodFilters */ "./packages/core/src/app/payment/paymentMethodFilters/getFilteredPaymentMethodsWithDefault.ts");




























const Payment = (props) => {
    var _a, _b;
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)({
        didExceedSpamLimit: false,
        isReady: false,
        shouldDisableSubmit: {},
        shouldHidePaymentSubmitButton: {},
        submitFunctions: {},
    });
    const [isCartStockRefreshComplete, setIsCartStockRefreshComplete] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false);
    const isReadyRef = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)(state.isReady);
    const grandTotalChangeUnsubscribe = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)();
    const validationSchemasRef = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)({});
    const lastFormValuesRef = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)(null);
    const { orderConfirmation: { persistB2BMetadata, invoiceRedirect }, userJourney: { disableStoreCredit }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_12__.useCapabilities)();
    const renderCartStockPositionsChangedModal = (error) => {
        const { cart, clearError, consignments } = props;
        const changedLineItemIds = error.changedItemIds;
        const hasItemsToShow = !!(changedLineItemIds === null || changedLineItemIds === void 0 ? void 0 : changedLineItemIds.length);
        if (!hasItemsToShow) {
            return null;
        }
        const onCartStockModalPlaceOrder = () => {
            clearError(error);
            const values = lastFormValuesRef.current;
            if (values) {
                handleSubmit(values);
            }
        };
        const onCartStockModalRequestClose = () => {
            clearError(error);
            lastFormValuesRef.current = null;
            setIsCartStockRefreshComplete(false);
        };
        return (react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_CartStockPositionsChangedModal__WEBPACK_IMPORTED_MODULE_24__["default"], { cart: cart, changedLineItemIds: changedLineItemIds, consignments: consignments, isOpen: true, onPlaceOrder: onCartStockModalPlaceOrder, onRequestClose: onCartStockModalRequestClose }));
    };
    const renderOrderErrorModal = () => {
        const { finalizeOrderError, language, shouldLocaliseErrorMessages, submitOrderError } = props;
        // FIXME: Export correct TS interface
        const error = submitOrderError || finalizeOrderError;
        if (!error ||
            error.type === 'order_finalization_not_required' ||
            error.type === 'payment_cancelled' ||
            error.type === 'payment_invalid_form' ||
            error.type === 'spam_protection_not_completed' ||
            error.type === 'invalid_hosted_form_value') {
            return null;
        }
        if ((0,_common_error__WEBPACK_IMPORTED_MODULE_20__["default"])(error)) {
            if (!isCartStockRefreshComplete) {
                return null;
            }
            return renderCartStockPositionsChangedModal(error);
        }
        return (react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_common_error__WEBPACK_IMPORTED_MODULE_17__["default"], { error: error, message: (0,_mapSubmitOrderErrorMessage__WEBPACK_IMPORTED_MODULE_26__["default"])(error, language.translate.bind(language), shouldLocaliseErrorMessages), onClose: handleCloseModal, title: (0,_mapSubmitOrderErrorMessage__WEBPACK_IMPORTED_MODULE_26__.mapSubmitOrderErrorTitle)(error, language.translate.bind(language)) }));
    };
    const renderEmbeddedSupportErrorModal = () => {
        const { checkEmbeddedSupport = lodash__WEBPACK_IMPORTED_MODULE_10__.noop, methods } = props;
        try {
            checkEmbeddedSupport(methods.map(({ id }) => id));
        }
        catch (error) {
            if (error instanceof Error) {
                return react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_common_error__WEBPACK_IMPORTED_MODULE_17__["default"], { error: error, onClose: handleCloseModal });
            }
        }
        return null;
    };
    const disableSubmit = (method, disabled = true) => {
        const uniqueId = (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_31__["default"])(method.id, method.gateway);
        const { shouldDisableSubmit } = state;
        if (shouldDisableSubmit[uniqueId] === disabled) {
            return;
        }
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { shouldDisableSubmit: Object.assign(Object.assign({}, shouldDisableSubmit), { [uniqueId]: disabled }) })));
    };
    const hidePaymentSubmitButton = (method, disabled = true) => {
        const uniqueId = (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_31__["default"])(method.id, method.gateway);
        const { shouldHidePaymentSubmitButton } = state;
        if (shouldHidePaymentSubmitButton[uniqueId] === disabled) {
            return;
        }
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { shouldHidePaymentSubmitButton: Object.assign(Object.assign({}, shouldHidePaymentSubmitButton), { [uniqueId]: disabled }) })));
    };
    const handleBeforeUnload = (event) => {
        const { defaultMethod, isSubmittingOrder, language } = props;
        const { selectedMethod = defaultMethod } = state;
        if (!isSubmittingOrder ||
            !selectedMethod ||
            selectedMethod.type === _paymentMethod__WEBPACK_IMPORTED_MODULE_30__["default"].Hosted ||
            selectedMethod.type === _paymentMethod__WEBPACK_IMPORTED_MODULE_30__["default"].PPSDK ||
            selectedMethod.skipRedirectConfirmationAlert) {
            return;
        }
        const message = language.translate('common.leave_warning');
        event.returnValue = message;
        return message;
    };
    const handleCloseModal = (_1, _a) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, [_1, _a], void 0, function* (_, { error }) {
        var _b;
        if (!error) {
            return;
        }
        const { cartUrl, clearError, loadCheckout } = props;
        const { type: errorType } = error; // FIXME: Export correct TS interface
        if (errorType === 'provider_fatal_error' ||
            errorType === 'order_could_not_be_finalized_error') {
            window.location.replace(cartUrl || '/');
        }
        if (errorType === 'tax_provider_unavailable') {
            window.location.reload();
        }
        if (errorType === 'cart_consistency') {
            yield loadCheckout();
        }
        if ((0,_common_error__WEBPACK_IMPORTED_MODULE_19__["default"])(error) && error.body) {
            const { body, headers, status } = error;
            if (body.type === 'provider_error' && headers.location) {
                (_b = window.top) === null || _b === void 0 ? void 0 : _b.location.assign(headers.location);
            }
            // Reload the checkout object to get the latest `shouldExecuteSpamCheck` value,
            // which will in turn make `SpamProtectionField` visible again.
            // NOTE: As a temporary fix, we're checking the status code instead of the error
            // type because of an issue with Nginx config, which causes the server to return
            // HTML page instead of JSON response when there is a 429 error.
            if (status === 429 ||
                body.type === 'spam_protection_expired' ||
                body.type === 'spam_protection_failed') {
                setState((prevState) => (Object.assign(Object.assign({}, prevState), { didExceedSpamLimit: true })));
                yield loadCheckout();
            }
        }
        clearError(error);
    });
    const handleStoreCreditChange = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)((useStoreCredit) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const { applyStoreCredit, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_10__.noop } = props;
        try {
            yield applyStoreCredit(useStoreCredit);
        }
        catch (e) {
            onUnhandledError(e);
        }
    }), []);
    const handleError = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)((error) => {
        const { onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_10__.noop, errorLogger } = props;
        const { type } = error;
        if (type === 'unexpected_detachment') {
            errorLogger.log(error);
            return;
        }
        return onUnhandledError(error);
    }, []);
    const onCartStockPositionChangedError = (values) => {
        lastFormValuesRef.current = values;
        setIsCartStockRefreshComplete(false);
        props
            .loadCheckout()
            .then(() => setIsCartStockRefreshComplete(true))
            .catch(() => {
            const { onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_10__.noop } = props;
            onUnhandledError(new Error('Cart refresh failed after stock position change'));
            setIsCartStockRefreshComplete(true);
        });
    };
    const persistB2BMetadataIfNeeded = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const { submitB2BMetadata } = props;
        if (!persistB2BMetadata) {
            return;
        }
        const invoiceComment = _InvoicePaymentCommentSessionStorage__WEBPACK_IMPORTED_MODULE_25__.InvoicePaymentCommentSessionStorage.get();
        // TODO: CHECKOUT-9891 Remove all B2B sessionStorage usages after this all
        yield submitB2BMetadata({
            isInvoice: invoiceRedirect,
            invoiceComment,
        });
    });
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)((values) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const { defaultMethod, loadPaymentMethods, isPaymentDataRequired, onCartChangedError = lodash__WEBPACK_IMPORTED_MODULE_10__.noop, onSubmit = lodash__WEBPACK_IMPORTED_MODULE_10__.noop, onSubmitError = lodash__WEBPACK_IMPORTED_MODULE_10__.noop, refreshB2BPaymentMethods, submitOrder, analyticsTracker, } = props;
        const { selectedMethod = defaultMethod, submitFunctions } = state;
        analyticsTracker.clickPayButton({ shouldCreateAccount: values.shouldCreateAccount });
        const customSubmit = selectedMethod &&
            submitFunctions[(0,_paymentMethod__WEBPACK_IMPORTED_MODULE_31__["default"])(selectedMethod.id, selectedMethod.gateway)];
        if (customSubmit) {
            return customSubmit(values);
        }
        try {
            if (persistB2BMetadata) {
                yield refreshB2BPaymentMethods();
            }
            const state = yield submitOrder((0,_mapToOrderRequestBody__WEBPACK_IMPORTED_MODULE_27__["default"])(values, isPaymentDataRequired()));
            const order = state.data.getOrder();
            yield persistB2BMetadataIfNeeded();
            analyticsTracker.paymentComplete();
            onSubmit(order === null || order === void 0 ? void 0 : order.orderId);
        }
        catch (error) {
            analyticsTracker.paymentRejected();
            if ((0,_common_error__WEBPACK_IMPORTED_MODULE_19__["default"])(error) && error.type === 'payment_method_invalid') {
                return loadPaymentMethods();
            }
            if ((0,_common_error__WEBPACK_IMPORTED_MODULE_18__["default"])(error)) {
                return onCartChangedError();
            }
            if ((0,_common_error__WEBPACK_IMPORTED_MODULE_20__["default"])(error)) {
                return onCartStockPositionChangedError(values);
            }
            onSubmitError(error);
        }
    }), [props.defaultMethod, state.selectedMethod, props.isPaymentDataRequired()]);
    const trackSelectedPaymentMethod = (method) => {
        const { analyticsTracker } = props;
        const methodName = method.config.displayName || method.id;
        const methodId = method.id;
        analyticsTracker.selectedPaymentMethod(methodName, methodId);
    };
    const setSelectedMethod = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)((method) => {
        const { selectedMethod } = state;
        if (selectedMethod === method) {
            return;
        }
        if (method) {
            trackSelectedPaymentMethod(method);
        }
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { selectedMethod: method })));
    }, []);
    const setSubmit = (method, fn) => {
        const uniqueId = (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_31__["default"])(method.id, method.gateway);
        const { submitFunctions } = state;
        if (submitFunctions[uniqueId] === fn) {
            return;
        }
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { submitFunctions: Object.assign(Object.assign({}, submitFunctions), { [uniqueId]: fn }) })));
    };
    const setValidationSchema = (0,react__WEBPACK_IMPORTED_MODULE_11__.useCallback)((method, schema) => {
        const uniqueId = (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_31__["default"])(method.id, method.gateway);
        if (validationSchemasRef.current[uniqueId] === schema) {
            return;
        }
        validationSchemasRef.current[uniqueId] = schema;
    }, []);
    const loadPaymentMethodsOrThrow = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const { loadPaymentMethods, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_10__.noop } = props;
        try {
            const updatedState = yield loadPaymentMethods();
            const checkout = updatedState.data.getCheckout();
            const config = updatedState.data.getConfig();
            const methods = updatedState.data.getPaymentMethods() || _common_utility__WEBPACK_IMPORTED_MODULE_21__.EMPTY_ARRAY;
            const defaultMethod = checkout && config
                ? (0,_paymentMethodFilters__WEBPACK_IMPORTED_MODULE_32__.getFilteredPaymentMethodsWithDefault)({
                    checkout,
                    checkoutSettings: config.checkoutSettings,
                    getPaymentMethod: updatedState.data.getPaymentMethod,
                    methods,
                    paymentProviderCustomer: updatedState.data.getPaymentProviderCustomer(),
                    capabilities: props.capabilities,
                }).defaultMethod
                : undefined;
            const selectedMethod = state.selectedMethod || defaultMethod;
            if (selectedMethod) {
                trackSelectedPaymentMethod(selectedMethod);
            }
        }
        catch (error) {
            onUnhandledError(error);
        }
    });
    const handleCartTotalChange = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        const isReady = isReadyRef.current;
        if (!isReady) {
            return;
        }
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { isReady: false })));
        yield loadPaymentMethodsOrThrow();
        setState((prevState) => (Object.assign(Object.assign({}, prevState), { isReady: true })));
    });
    const getContextValue = (0,_bigcommerce_memoize__WEBPACK_IMPORTED_MODULE_9__.memoizeOne)(() => {
        return {
            disableSubmit,
            setSubmit,
            setValidationSchema,
            hidePaymentSubmitButton,
        };
    });
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
        isReadyRef.current = state.isReady;
    }, [state.isReady]);
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
        const init = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
            const { finalizeOrderIfNeeded, onFinalize = lodash__WEBPACK_IMPORTED_MODULE_10__.noop, onFinalizeError = lodash__WEBPACK_IMPORTED_MODULE_10__.noop, onReady = lodash__WEBPACK_IMPORTED_MODULE_10__.noop, onUnhandledError = lodash__WEBPACK_IMPORTED_MODULE_10__.noop, orderId, refreshB2BPaymentMethods, usableStoreCredit, checkoutServiceSubscribe, } = props;
            if (!disableStoreCredit && usableStoreCredit) {
                yield handleStoreCreditChange(true);
            }
            yield loadPaymentMethodsOrThrow();
            if (persistB2BMetadata && orderId) {
                try {
                    yield refreshB2BPaymentMethods();
                }
                catch (error) {
                    if (error instanceof Error) {
                        onUnhandledError(error);
                    }
                }
            }
            try {
                const state = yield finalizeOrderIfNeeded({
                    integrations: [
                        _bigcommerce_checkout_sdk_integrations_afterpay__WEBPACK_IMPORTED_MODULE_1__.createAfterpayPaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_bluesnap_direct__WEBPACK_IMPORTED_MODULE_2__.createBlueSnapV2PaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_cba_mpgs__WEBPACK_IMPORTED_MODULE_3__.createCBAMPGSPaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_4__.createCheckoutComAPMPaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_4__.createCheckoutComCreditCardPaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_4__.createCheckoutComFawryPaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_4__.createCheckoutComIdealPaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_checkoutcom_custom__WEBPACK_IMPORTED_MODULE_4__.createCheckoutComSepaPaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_clearpay__WEBPACK_IMPORTED_MODULE_5__.createClearpayPaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_offsite__WEBPACK_IMPORTED_MODULE_6__.createOffsitePaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_paypal_express__WEBPACK_IMPORTED_MODULE_7__.createPaypalExpressPaymentStrategy,
                        _bigcommerce_checkout_sdk_integrations_sagepay__WEBPACK_IMPORTED_MODULE_8__.createSagePayPaymentStrategy,
                    ],
                });
                const order = state.data.getOrder();
                yield persistB2BMetadataIfNeeded();
                onFinalize(order === null || order === void 0 ? void 0 : order.orderId);
            }
            catch (error) {
                if ((0,_common_error__WEBPACK_IMPORTED_MODULE_19__["default"])(error) && error.type !== 'order_finalization_not_required') {
                    onFinalizeError(error);
                }
            }
            grandTotalChangeUnsubscribe.current = checkoutServiceSubscribe(() => handleCartTotalChange(), ({ data }) => { var _a; return (_a = data.getCheckout()) === null || _a === void 0 ? void 0 : _a.grandTotal; }, ({ data }) => { var _a; return (_a = data.getCheckout()) === null || _a === void 0 ? void 0 : _a.outstandingBalance; });
            window.addEventListener('beforeunload', handleBeforeUnload);
            setState((prevState) => (Object.assign(Object.assign({}, prevState), { isReady: true })));
            onReady();
        });
        void init();
        return () => {
            const deInit = () => {
                if (grandTotalChangeUnsubscribe.current) {
                    grandTotalChangeUnsubscribe.current();
                    grandTotalChangeUnsubscribe.current = undefined;
                }
                window.removeEventListener('beforeunload', handleBeforeUnload);
            };
            deInit();
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
        const { checkEmbeddedSupport = lodash__WEBPACK_IMPORTED_MODULE_10__.noop, methods } = props;
        checkEmbeddedSupport(methods.map(({ id }) => id));
    }, [props.methods]);
    const { selectedMethod = props.defaultMethod } = state;
    const uniqueSelectedMethodId = selectedMethod && (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_31__["default"])(selectedMethod.id, selectedMethod.gateway);
    const shouldShowPaymentForm = props.shouldShowSubmitPaymentButton || (!(0,lodash__WEBPACK_IMPORTED_MODULE_10__.isEmpty)(props.methods) && props.defaultMethod);
    return (react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_PaymentContext__WEBPACK_IMPORTED_MODULE_28__["default"].Provider, { value: getContextValue() },
        react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_14__["default"], { isLoading: !state.isReady }, shouldShowPaymentForm && (react__WEBPACK_IMPORTED_MODULE_11___default().createElement(_PaymentForm__WEBPACK_IMPORTED_MODULE_29__["default"], { additionalField: props.capabilities.payment.additionalField, availableStoreCredit: props.availableStoreCredit, defaultGatewayId: (_a = props.defaultMethod) === null || _a === void 0 ? void 0 : _a.gateway, defaultMethodId: ((_b = props.defaultMethod) === null || _b === void 0 ? void 0 : _b.id) || '', didExceedSpamLimit: state.didExceedSpamLimit, disableStoreCredit: disableStoreCredit, isEmbedded: props.isEmbedded, isInitializingPayment: props.isInitializingPayment, isPaymentDataRequired: props.isPaymentDataRequired, isStoreCreditApplied: props.isStoreCreditApplied, isTermsConditionsRequired: props.isTermsConditionsRequired, isUsingMultiShipping: props.isUsingMultiShipping, methods: props.methods, onMethodSelect: setSelectedMethod, onStoreCreditChange: handleStoreCreditChange, onSubmit: handleSubmit, onUnhandledError: handleError, orderExtraFields: props.orderExtraFields, selectedMethod: state.selectedMethod || props.defaultMethod, shouldDisableSubmit: (uniqueSelectedMethodId &&
                state.shouldDisableSubmit[uniqueSelectedMethodId]) ||
                undefined, shouldExecuteSpamCheck: props.shouldExecuteSpamCheck, shouldHidePaymentSubmitButton: (uniqueSelectedMethodId &&
                props.isPaymentDataRequired() &&
                state.shouldHidePaymentSubmitButton[uniqueSelectedMethodId]) ||
                undefined, termsConditionsText: props.termsConditionsText, termsConditionsUrl: props.termsConditionsUrl, usableStoreCredit: props.usableStoreCredit, validationSchema: (uniqueSelectedMethodId &&
                validationSchemasRef.current[uniqueSelectedMethodId]) ||
                undefined }))),
        renderOrderErrorModal(),
        renderEmbeddedSupportErrorModal()));
};
function mapToPaymentProps({ checkoutService, checkoutState }, { capabilities }) {
    const { data: { getCart, getCheckout, getConfig, getCustomer, getConsignments, getOrder, getOrderExtraFields, getPaymentMethod, getPaymentMethods, isPaymentDataRequired, getPaymentProviderCustomer, }, errors: { getFinalizeOrderError, getSubmitOrderError }, statuses: { isInitializingPayment, isSubmittingOrder }, } = checkoutState;
    const checkout = getCheckout();
    const config = getConfig();
    const customer = getCustomer();
    const consignments = getConsignments();
    const paymentProviderCustomer = getPaymentProviderCustomer();
    const { isComplete = false } = getOrder() || {};
    const methods = getPaymentMethods() || _common_utility__WEBPACK_IMPORTED_MODULE_21__.EMPTY_ARRAY;
    if (!checkout || !config || !customer || isComplete) {
        return null;
    }
    const checkoutSettings = config.checkoutSettings;
    const { enableTermsAndConditions: isTermsConditionsEnabled, features, orderTermsAndConditionsType: termsConditionsType, orderTermsAndConditions: termsCondtitionsText, orderTermsAndConditionsLink: termsCondtitionsUrl, } = checkoutSettings;
    const isTermsConditionsRequired = isTermsConditionsEnabled;
    const { isStoreCreditApplied } = checkout;
    const orderExtraFields = capabilities.userJourney.hasOrderExtraFields
        ? getOrderExtraFields()
        : undefined;
    const { defaultMethod, filteredMethods } = (0,_paymentMethodFilters__WEBPACK_IMPORTED_MODULE_32__.getFilteredPaymentMethodsWithDefault)({
        checkout,
        checkoutSettings: config.checkoutSettings,
        getPaymentMethod,
        methods,
        paymentProviderCustomer,
        capabilities,
    });
    return {
        applyStoreCredit: checkoutService.applyStoreCredit,
        availableStoreCredit: customer.storeCredit,
        b2bToken: checkoutState.data.getB2BToken(),
        cart: getCart(),
        consignments,
        cartUrl: config.links.cartLink,
        clearError: checkoutService.clearError,
        defaultMethod,
        finalizeOrderError: getFinalizeOrderError(),
        finalizeOrderIfNeeded: checkoutService.finalizeOrderIfNeeded,
        loadCheckout: checkoutService.loadCheckout,
        isInitializingPayment: isInitializingPayment(),
        isPaymentDataRequired,
        isStoreCreditApplied,
        isSubmittingOrder: isSubmittingOrder(),
        isTermsConditionsRequired,
        loadPaymentMethods: checkoutService.loadPaymentMethods,
        methods: filteredMethods,
        orderExtraFields,
        orderId: checkout.orderId,
        refreshB2BPaymentMethods: checkoutService.refreshB2BPaymentMethods,
        submitB2BMetadata: checkoutService.persistB2BMetadata,
        shouldExecuteSpamCheck: checkout.shouldExecuteSpamCheck,
        shouldLocaliseErrorMessages: features['PAYMENTS-6799.localise_checkout_payment_error_messages'],
        shouldShowSubmitPaymentButton: (0,_common_utility__WEBPACK_IMPORTED_MODULE_22__["default"])(checkoutSettings, 'CHECKOUT-9729.show_submit_button_when_payment_not_required', false),
        submitOrder: checkoutService.submitOrder,
        submitOrderError: getSubmitOrderError(),
        checkoutServiceSubscribe: checkoutService.subscribe,
        termsConditionsText: isTermsConditionsRequired && termsConditionsType === _termsConditions__WEBPACK_IMPORTED_MODULE_23__.TermsConditionsType.TextArea
            ? termsCondtitionsText
            : undefined,
        termsConditionsUrl: isTermsConditionsRequired && termsConditionsType === _termsConditions__WEBPACK_IMPORTED_MODULE_23__.TermsConditionsType.Link
            ? termsCondtitionsUrl
            : undefined,
        usableStoreCredit: checkout.grandTotal > 0 ? Math.min(checkout.grandTotal, customer.storeCredit || 0) : 0,
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_analytics__WEBPACK_IMPORTED_MODULE_15__["default"])((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_13__["default"])((0,_checkout__WEBPACK_IMPORTED_MODULE_16__["default"])(mapToPaymentProps)(Payment))));


/***/ },

/***/ "./packages/core/src/app/payment/PaymentContext.tsx"
/*!**********************************************************!*\
  !*** ./packages/core/src/app/payment/PaymentContext.tsx ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PaymentContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentContext);


/***/ },

/***/ "./packages/core/src/app/payment/PaymentForm.tsx"
/*!*******************************************************!*\
  !*** ./packages/core/src/app/payment/PaymentForm.tsx ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _bigcommerce_checkout_checkout_extension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/checkout-extension */ "./packages/checkout-extension/src/Extension.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/capabilities/CapabilitiesContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Form/Form.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/contexts/FormContext.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Fieldset/Fieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Legend/Legend.tsx");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../address */ "./packages/core/src/app/address/B2BExtraFieldsSessionStorage.ts");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../address */ "./packages/core/src/app/address/getAddressFormFieldsValidationSchema.ts");
/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/utility */ "./packages/core/src/app/common/utility/isExperimentEnabled.ts");
/* harmony import */ var _formFields__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../formFields */ "./packages/core/src/app/formFields/getExtraFieldsValidationSchema.ts");
/* harmony import */ var _termsConditions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../termsConditions */ "./packages/core/src/app/termsConditions/TermsConditions.tsx");
/* harmony import */ var _AdditionalPaymentField__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./AdditionalPaymentField */ "./packages/core/src/app/payment/AdditionalPaymentField.tsx");
/* harmony import */ var _AdditionalPaymentFieldSessionStorage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./AdditionalPaymentFieldSessionStorage */ "./packages/core/src/app/payment/AdditionalPaymentFieldSessionStorage.ts");
/* harmony import */ var _getPaymentValidationSchema__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./getPaymentValidationSchema */ "./packages/core/src/app/payment/getPaymentValidationSchema.ts");
/* harmony import */ var _InvoicePaymentCommentField__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./InvoicePaymentCommentField */ "./packages/core/src/app/payment/InvoicePaymentCommentField.tsx");
/* harmony import */ var _InvoicePaymentCommentSessionStorage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./InvoicePaymentCommentSessionStorage */ "./packages/core/src/app/payment/InvoicePaymentCommentSessionStorage.ts");
/* harmony import */ var _NoPaymentMethods__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./NoPaymentMethods */ "./packages/core/src/app/payment/NoPaymentMethods.tsx");
/* harmony import */ var _orderExtraFields__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./orderExtraFields */ "./packages/core/src/app/payment/orderExtraFields/getInitialOrderExtraFieldsValues.ts");
/* harmony import */ var _orderExtraFields__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./orderExtraFields */ "./packages/core/src/app/payment/orderExtraFields/OrderExtraFieldsFieldset.tsx");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodId.ts");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodList.tsx");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/getUniquePaymentMethodId.ts");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/getPaymentMethodName.ts");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/usePoMethodDisabledReason.ts");
/* harmony import */ var _PaymentRedeemables__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./PaymentRedeemables */ "./packages/core/src/app/payment/PaymentRedeemables.tsx");
/* harmony import */ var _PaymentSubmitButton__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./PaymentSubmitButton */ "./packages/core/src/app/payment/PaymentSubmitButton.tsx");
/* harmony import */ var _ProvidersSectionOnTopOfPaymentsList__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ProvidersSectionOnTopOfPaymentsList */ "./packages/core/src/app/payment/ProvidersSectionOnTopOfPaymentsList/ProvidersSectionOnTopOfPaymentsList.tsx");
/* harmony import */ var _SpamProtectionField__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./SpamProtectionField */ "./packages/core/src/app/payment/SpamProtectionField.tsx");
/* harmony import */ var _storeCredit__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./storeCredit */ "./packages/core/src/app/payment/storeCredit/StoreCreditField.tsx");
/* harmony import */ var _storeCredit__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./storeCredit */ "./packages/core/src/app/payment/storeCredit/StoreCreditOverlay.tsx");


























const PaymentForm = ({ additionalField, availableStoreCredit = 0, disableStoreCredit = false, didExceedSpamLimit, isEmbedded, isInitializingPayment, isPaymentDataRequired, isTermsConditionsRequired, isStoreCreditApplied, isUsingMultiShipping, language, methods, onMethodSelect, onStoreCreditChange, onUnhandledError, orderExtraFields, resetForm, selectedMethod, shouldDisableSubmit, shouldHidePaymentSubmitButton, shouldExecuteSpamCheck, termsConditionsText = '', termsConditionsUrl, usableStoreCredit = 0, values, }) => {
    var _a, _b, _c;
    const selectedMethodId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        if (!selectedMethod) {
            return;
        }
        switch (selectedMethod.id) {
            case _paymentMethod__WEBPACK_IMPORTED_MODULE_27__["default"].AmazonPay:
                if (selectedMethod.initializationData.paymentToken) {
                    return;
                }
                return selectedMethod.id;
            default:
                return selectedMethod.id;
        }
    }, [selectedMethod]);
    const brandName = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        var _a, _b, _c;
        if (!selectedMethod) {
            return;
        }
        return (((_b = (_a = selectedMethod.initializationData) === null || _a === void 0 ? void 0 : _a.payPalCreditProductBrandName) === null || _b === void 0 ? void 0 : _b.credit) ||
            ((_c = selectedMethod.initializationData) === null || _c === void 0 ? void 0 : _c.payPalCreditProductBrandName));
    }, [selectedMethod]);
    const { checkoutState } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_7__.useCheckout)();
    const { payment: { invoicePaymentComment }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_6__.useCapabilities)();
    const { checkoutSettings } = (_a = checkoutState.data.getConfig()) !== null && _a !== void 0 ? _a : {};
    const poMethodDisabledReason = (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_31__.usePoMethodDisabledReason)(selectedMethod);
    const isSubmitDisabled = shouldDisableSubmit || Boolean(poMethodDisabledReason);
    const shouldShowSubmitButtonWhenPaymentNotRequired = (0,_common_utility__WEBPACK_IMPORTED_MODULE_16__["default"])(checkoutSettings, 'CHECKOUT-9729.show_submit_button_when_payment_not_required', false);
    const hideSubmitPaymentButton = shouldHidePaymentSubmitButton ||
        (shouldShowSubmitButtonWhenPaymentNotRequired &&
            isPaymentDataRequired() &&
            (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(methods));
    if (shouldExecuteSpamCheck) {
        return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_SpamProtectionField__WEBPACK_IMPORTED_MODULE_35__["default"], { didExceedSpamLimit: didExceedSpamLimit, onUnhandledError: onUnhandledError }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_10__["default"], { className: "checkout-form", testId: "payment-form" },
        usableStoreCredit > 0 && !disableStoreCredit && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_storeCredit__WEBPACK_IMPORTED_MODULE_36__["default"], { availableStoreCredit: availableStoreCredit, isStoreCreditApplied: isStoreCreditApplied, name: "useStoreCredit", onChange: onStoreCreditChange, usableStoreCredit: usableStoreCredit })),
        shouldShowSubmitButtonWhenPaymentNotRequired &&
            (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(methods) &&
            (isPaymentDataRequired() ? (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_NoPaymentMethods__WEBPACK_IMPORTED_MODULE_24__.NoPaymentMethods, { message: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_8__["default"], { id: "payment.payment_methods_unavailable_error" }) })) : (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_NoPaymentMethods__WEBPACK_IMPORTED_MODULE_24__.NoPaymentMethods, { message: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_8__["default"], { id: "payment.payment_not_required_text" }) }))),
        (!shouldShowSubmitButtonWhenPaymentNotRequired || !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(methods)) && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(PaymentMethodListFieldset, { isEmbedded: isEmbedded, isInitializingPayment: isInitializingPayment, isPaymentDataRequired: isPaymentDataRequired, isUsingMultiShipping: isUsingMultiShipping, methods: methods, onMethodSelect: onMethodSelect, onUnhandledError: onUnhandledError, resetForm: resetForm, values: values })),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_PaymentRedeemables__WEBPACK_IMPORTED_MODULE_32__["default"], null),
        additionalField && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_AdditionalPaymentField__WEBPACK_IMPORTED_MODULE_19__["default"], { isRequired: additionalField.required, label: additionalField.label })),
        isTermsConditionsRequired && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_termsConditions__WEBPACK_IMPORTED_MODULE_18__.TermsConditions, { termsConditionsText: termsConditionsText, termsConditionsUrl: termsConditionsUrl })),
        orderExtraFields && orderExtraFields.length > 0 && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_orderExtraFields__WEBPACK_IMPORTED_MODULE_26__["default"], { formFields: orderExtraFields })),
        invoicePaymentComment && react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_InvoicePaymentCommentField__WEBPACK_IMPORTED_MODULE_22__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "form-actions" }, hideSubmitPaymentButton ? (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(PaymentMethodSubmitButtonContainer, null)) : (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_PaymentSubmitButton__WEBPACK_IMPORTED_MODULE_33__["default"], { brandName: brandName, initialisationStrategyType: selectedMethod && ((_b = selectedMethod.initializationStrategy) === null || _b === void 0 ? void 0 : _b.type), isComplete: !!((_c = selectedMethod === null || selectedMethod === void 0 ? void 0 : selectedMethod.initializationData) === null || _c === void 0 ? void 0 : _c.isComplete), isDisabled: isSubmitDisabled, methodGateway: selectedMethod && selectedMethod.gateway, methodId: selectedMethodId, methodName: selectedMethod && (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_30__["default"])(language)(selectedMethod), methodType: selectedMethod && selectedMethod.method })))));
};
const PaymentMethodSubmitButtonContainer = () => {
    return react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "submitButtonContainer", id: "checkout-payment-continue" });
};
const PaymentMethodListFieldset = ({ isEmbedded, isInitializingPayment, isPaymentDataRequired, isUsingMultiShipping, methods, onMethodSelect = lodash__WEBPACK_IMPORTED_MODULE_2__.noop, onUnhandledError, resetForm, values, }) => {
    const { setSubmitted } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_11__["default"]);
    const handlePaymentMethodSelect = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((method) => {
        const updatedValues = Object.assign(Object.assign({}, values), { ccCustomerCode: '', ccCvv: '', ccDocument: '', customerEmail: '', customerMobile: '', ccExpiry: '', ccName: '', ccNumber: '', instrumentId: '', paymentProviderRadio: (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_29__["default"])(method.id, method.gateway), shouldCreateAccount: true, shouldSaveInstrument: false });
        resetForm({ values: updatedValues });
        setSubmitted(false);
        onMethodSelect(method);
    }, [values, onMethodSelect, resetForm, setSubmitted]);
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_12__["default"], { legend: react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_13__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_8__["default"], { id: "payment.payment_methods_text" })) },
        !isPaymentDataRequired() && react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_storeCredit__WEBPACK_IMPORTED_MODULE_37__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_checkout_extension__WEBPACK_IMPORTED_MODULE_5__.Extension, { region: "payment.paymentMethodList.before" /* ExtensionRegion.PaymentPaymentMethodListBefore */ }),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ProvidersSectionOnTopOfPaymentsList__WEBPACK_IMPORTED_MODULE_34__.ProvidersSectionOnTopOfPaymentsList, { methods: methods }),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_paymentMethod__WEBPACK_IMPORTED_MODULE_28__["default"], { isEmbedded: isEmbedded, isInitializingPayment: isInitializingPayment, isUsingMultiShipping: isUsingMultiShipping, methods: methods, onSelect: handlePaymentMethodSelect, onUnhandledError: onUnhandledError })));
};
const paymentFormConfig = {
    mapPropsToValues: ({ defaultGatewayId, defaultMethodId, orderExtraFields }) => {
        const storedOrderExtraFields = _address__WEBPACK_IMPORTED_MODULE_14__.B2BExtraFieldsSessionStorage.getFields(_address__WEBPACK_IMPORTED_MODULE_14__.B2BExtraFieldsSessionStorage.ORDER_KEY);
        return {
            ccCustomerCode: '',
            ccCvv: '',
            ccDocument: '',
            customerEmail: '',
            customerMobile: '',
            ccExpiry: '',
            ccName: '',
            ccNumber: '',
            paymentProviderRadio: (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_29__["default"])(defaultMethodId, defaultGatewayId),
            instrumentId: '',
            shouldCreateAccount: true,
            shouldSaveInstrument: false,
            terms: false,
            hostedForm: {
                cardType: '',
                errors: {
                    cardCode: '',
                    cardCodeVerification: '',
                    cardExpiry: '',
                    cardName: '',
                    cardNumber: '',
                    cardNumberVerification: '',
                },
            },
            accountNumber: '',
            routingNumber: '',
            orderExtraFields: (0,_orderExtraFields__WEBPACK_IMPORTED_MODULE_25__["default"])(orderExtraFields, storedOrderExtraFields),
            invoicePaymentComment: _InvoicePaymentCommentSessionStorage__WEBPACK_IMPORTED_MODULE_23__.InvoicePaymentCommentSessionStorage.get(),
            additionalPaymentField: _AdditionalPaymentFieldSessionStorage__WEBPACK_IMPORTED_MODULE_20__.AdditionalPaymentFieldSessionStorage.get(),
        };
    },
    handleSubmit: (values, { props: { onSubmit = lodash__WEBPACK_IMPORTED_MODULE_2__.noop } }) => {
        const _a = values, { orderExtraFields, invoicePaymentComment: _invoicePaymentComment, additionalPaymentField: _additionalPaymentField } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_a, ["orderExtraFields", "invoicePaymentComment", "additionalPaymentField"]);
        if (orderExtraFields && Object.keys(orderExtraFields).length > 0) {
            _address__WEBPACK_IMPORTED_MODULE_14__.B2BExtraFieldsSessionStorage.setFields(_address__WEBPACK_IMPORTED_MODULE_14__.B2BExtraFieldsSessionStorage.ORDER_KEY, orderExtraFields);
        }
        onSubmit((0,lodash__WEBPACK_IMPORTED_MODULE_2__.omitBy)(rest, (value, key) => (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isNil)(value) || value === '' || key === 'hostedForm'));
    },
    validationSchema: ({ additionalField, isPaymentDataRequired, language, isTermsConditionsRequired = false, orderExtraFields, validationSchema, }) => {
        const paymentSchema = (0,_getPaymentValidationSchema__WEBPACK_IMPORTED_MODULE_21__["default"])({
            additionalValidation: validationSchema,
            isPaymentDataRequired: isPaymentDataRequired(),
            isTermsConditionsRequired,
            language,
        });
        const withOrderExtraFields = orderExtraFields && orderExtraFields.length > 0
            ? paymentSchema.concat((0,_formFields__WEBPACK_IMPORTED_MODULE_17__.getOrderExtraFieldsValidationSchema)({
                formFields: orderExtraFields,
                translate: (0,_address__WEBPACK_IMPORTED_MODULE_15__.getTranslateAddressError)(orderExtraFields, language),
            }))
            : paymentSchema;
        if (additionalField === null || additionalField === void 0 ? void 0 : additionalField.required) {
            return withOrderExtraFields.concat((0,yup__WEBPACK_IMPORTED_MODULE_4__.object)({
                additionalPaymentField: (0,yup__WEBPACK_IMPORTED_MODULE_4__.string)()
                    .trim()
                    .required(language.translate('payment.errors.field_required_error', {
                    label: additionalField.label,
                })),
            }));
        }
        return withOrderExtraFields;
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_9__["default"])((0,formik__WEBPACK_IMPORTED_MODULE_1__.withFormik)(paymentFormConfig)((0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(PaymentForm))));


/***/ },

/***/ "./packages/core/src/app/payment/PaymentRedeemables.tsx"
/*!**************************************************************!*\
  !*** ./packages/core/src/app/payment/PaymentRedeemables.tsx ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/capabilities/CapabilitiesContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Fieldset/Fieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Legend/Legend.tsx");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cart */ "./packages/core/src/app/cart/Redeemable.tsx");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cart */ "./packages/core/src/app/cart/mapToRedeemableProps.ts");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/utility */ "./packages/core/src/app/common/utility/isExperimentEnabled.ts");







const PaymentRedeemables = (redeemableProps) => {
    var _a;
    const { checkoutState } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    const { checkoutSettings } = (_a = checkoutState.data.getConfig()) !== null && _a !== void 0 ? _a : {};
    const isMultiCouponEnabled = (0,_common_utility__WEBPACK_IMPORTED_MODULE_9__["default"])(checkoutSettings, 'CHECKOUT-9674.multi_coupon_cart_checkout', false);
    const { userJourney: { disableCoupon, disableGiftCertificate }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.useCapabilities)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { additionalClassName: "redeemable-payments", legend: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { hidden: true },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.redeemable_payments_text" })) },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cart__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, redeemableProps, { disableCoupon: disableCoupon, disableGiftCertificate: disableGiftCertificate, showAppliedRedeemables: !isMultiCouponEnabled }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_checkout__WEBPACK_IMPORTED_MODULE_8__["default"])(_cart__WEBPACK_IMPORTED_MODULE_7__["default"])((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(PaymentRedeemables)));


/***/ },

/***/ "./packages/core/src/app/payment/PaymentSubmitButton.tsx"
/*!***************************************************************!*\
  !*** ./packages/core/src/app/payment/PaymentSubmitButton.tsx ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/theme/ThemeContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/button/Button.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/IconBolt.tsx");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodId.ts");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodType.ts");







const providersWithCustomClasses = [_paymentMethod__WEBPACK_IMPORTED_MODULE_7__["default"].Bolt];
const PaymentSubmitButtonText = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ methodId, methodName, methodType, methodGateway, initialisationStrategyType, brandName, isComplete, isPaymentDataRequired, }) => {
    if (!isPaymentDataRequired) {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.place_order_action" });
    }
    if (methodName && initialisationStrategyType === 'none') {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { data: { methodName }, id: "payment.ppsdk_continue_action" });
    }
    if (methodId === _paymentMethod__WEBPACK_IMPORTED_MODULE_7__["default"].AmazonPay) {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.amazonpay_continue_action" });
    }
    if (methodId === _paymentMethod__WEBPACK_IMPORTED_MODULE_7__["default"].Bolt) {
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { additionalClassName: "payment-submit-button-bolt-icon" }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.place_order_action" })));
    }
    if (methodGateway === _paymentMethod__WEBPACK_IMPORTED_MODULE_7__["default"].Barclaycard) {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.barclaycard_continue_action" });
    }
    if (methodGateway === _paymentMethod__WEBPACK_IMPORTED_MODULE_7__["default"].BlueSnapV2) {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.bluesnap_v2_continue_action" });
    }
    if (methodType === _paymentMethod__WEBPACK_IMPORTED_MODULE_8__["default"].VisaCheckout) {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.visa_checkout_continue_action" });
    }
    if (methodType === _paymentMethod__WEBPACK_IMPORTED_MODULE_8__["default"].PaypalVenmo ||
        methodId === _paymentMethod__WEBPACK_IMPORTED_MODULE_7__["default"].BraintreeVenmo) {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.paypal_venmo_continue_action" });
    }
    if (methodType === _paymentMethod__WEBPACK_IMPORTED_MODULE_8__["default"].Paypal) {
        const continueActionId = methodId === _paymentMethod__WEBPACK_IMPORTED_MODULE_7__["default"].PaypalCommerce
            ? 'payment.place_order_action'
            : 'payment.paypal_continue_action';
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { data: { isComplete }, id: isComplete ? 'payment.paypal_complete_action' : continueActionId }));
    }
    if (methodType === _paymentMethod__WEBPACK_IMPORTED_MODULE_8__["default"].PaypalCredit) {
        const continueTranslationId = brandName
            ? 'payment.continue_with_brand'
            : 'payment.paypal_pay_later_continue_action';
        const completeTranslationId = brandName
            ? 'payment.complete_with_brand'
            : 'payment.paypal_pay_later_complete_action';
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { data: { brandName, isComplete, continueTranslationId, completeTranslationId }, id: isComplete ? completeTranslationId : continueTranslationId }));
    }
    if (methodId === _paymentMethod__WEBPACK_IMPORTED_MODULE_7__["default"].Quadpay) {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.quadpay_continue_action" });
    }
    if (methodId === _paymentMethod__WEBPACK_IMPORTED_MODULE_7__["default"].Zip) {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.zip_continue_action" });
    }
    if (methodId === _paymentMethod__WEBPACK_IMPORTED_MODULE_7__["default"].Klarna) {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.klarna_continue_action" });
    }
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "payment.place_order_action" });
});
const PaymentSubmitButton = ({ isDisabled, isInitializing, isSubmitting, isPaymentDataRequired, methodGateway, methodId, methodName, methodType, initialisationStrategyType, brandName, isComplete, }) => {
    const { themeV2 } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useThemeContext)();
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()({
            [`payment-submit-button-${methodId}`]: providersWithCustomClasses.includes(methodId),
        }, 'sub-header'), "data-test": "payment-submit-button", disabled: isInitializing || isSubmitting || isDisabled, id: "checkout-payment-continue", isFullWidth: true, isLoading: isSubmitting, size: _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__.ButtonSize.Large, type: "submit", variant: themeV2 ? _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__.ButtonVariant.Primary : _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__.ButtonVariant.Action },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(PaymentSubmitButtonText, { brandName: brandName, initialisationStrategyType: initialisationStrategyType, isComplete: isComplete, isPaymentDataRequired: isPaymentDataRequired, methodGateway: methodGateway, methodId: methodId, methodName: methodName, methodType: methodType })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_checkout__WEBPACK_IMPORTED_MODULE_6__["default"])(({ checkoutState }) => {
    const { data: { isPaymentDataRequired }, statuses: { isInitializingCustomer, isInitializingPayment, isSubmittingOrder }, } = checkoutState;
    return {
        isInitializing: isInitializingCustomer() || isInitializingPayment(),
        isPaymentDataRequired: isPaymentDataRequired(),
        isSubmitting: isSubmittingOrder(),
    };
})((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(PaymentSubmitButton)));


/***/ },

/***/ "./packages/core/src/app/payment/ProvidersSectionOnTopOfPaymentsList/ProvidersSectionOnTopOfPaymentsList.tsx"
/*!*******************************************************************************************************************!*\
  !*** ./packages/core/src/app/payment/ProvidersSectionOnTopOfPaymentsList/ProvidersSectionOnTopOfPaymentsList.tsx ***!
  \*******************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProvidersSectionOnTopOfPaymentsList: () => (/* binding */ ProvidersSectionOnTopOfPaymentsList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../paymentMethod */ "./packages/core/src/app/payment/paymentMethod/getUniquePaymentMethodId.ts");


const ProvidersSectionOnTopOfPaymentsList = ({ methods, }) => {
    const methodsWithTopSection = methods.filter((method) => { var _a; return (_a = method.initializationData) === null || _a === void 0 ? void 0 : _a.hasSectionOnTopOfPaymentsList; });
    if (!methodsWithTopSection.length) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "providers-section-on-top-of-payments-list", "data-test": "providers-section-on-top-of-payments-list" }, methodsWithTopSection.map((method) => {
        const prefix = (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_1__["default"])(method.id, method.gateway);
        const containerId = `${prefix}-provider-section-on-top-of-payments-list`;
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-test": containerId, id: containerId, key: prefix });
    })));
};


/***/ },

/***/ "./packages/core/src/app/payment/SpamProtectionField.tsx"
/*!***************************************************************!*\
  !*** ./packages/core/src/app/payment/SpamProtectionField.tsx ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LoadingOverlay.tsx");
/* harmony import */ var _common_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/error */ "./packages/core/src/app/common/error/isErrorWithType.ts");






const SpamProtectionField = ({ didExceedSpamLimit, onUnhandledError, }) => {
    const [shouldShowRetryButton, setShouldShowRetryButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { checkoutService: { executeSpamCheck }, checkoutState: { statuses }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    const isExecutingSpamCheck = statuses.isExecutingSpamCheck();
    const verify = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
        try {
            yield executeSpamCheck();
        }
        catch (error) {
            setShouldShowRetryButton(true);
            // Notify the parent component if the user experiences a problem other than cancelling the reCaptcha challenge.
            if ((0,_common_error__WEBPACK_IMPORTED_MODULE_5__["default"])(error) &&
                error.type !== 'spam_protection_challenge_not_completed' &&
                onUnhandledError) {
                onUnhandledError(error);
            }
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (didExceedSpamLimit) {
            return;
        }
        verify();
    }, []);
    const handleRetry = (event) => {
        event.preventDefault();
        verify();
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "spamProtection-container" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { isLoading: isExecutingSpamCheck }, (didExceedSpamLimit || shouldShowRetryButton) && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "spamProtection-panel optimizedCheckout-overlay" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", { className: "spamProtection-panel-message optimizedCheckout-primaryContent", "data-test": "spam-protection-verify-button", onClick: handleRetry },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "spam_protection.verify_action" })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpamProtectionField);


/***/ },

/***/ "./packages/core/src/app/payment/cartStockPositionsChangedUtils.ts"
/*!*************************************************************************!*\
  !*** ./packages/core/src/app/payment/cartStockPositionsChangedUtils.ts ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getChangedItemsToShow: () => (/* binding */ getChangedItemsToShow),
/* harmony export */   groupChangedItemsByConsignment: () => (/* binding */ groupChangedItemsByConsignment)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shipping_findLineItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shipping/findLineItems */ "./packages/core/src/app/shipping/findLineItems.ts");


/**
 * Resolve changed line item IDs to cart items; for bundled items use parent item (we do not show bundled item separately), then dedupe.
 */
function getChangedItemsToShow(cart, changedLineItemIds) {
    var _a, _b;
    const allCartPhysicalItems = (_b = (_a = cart === null || cart === void 0 ? void 0 : cart.lineItems) === null || _a === void 0 ? void 0 : _a.physicalItems) !== null && _b !== void 0 ? _b : [];
    if (!allCartPhysicalItems.length ||
        !Array.isArray(changedLineItemIds) ||
        !changedLineItemIds.length) {
        return [];
    }
    const allCartPhysicalItemsById = new Map(allCartPhysicalItems.map((it) => [it.id, it]));
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqBy)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.compact)(changedLineItemIds.map((id) => {
        var _a;
        const item = allCartPhysicalItemsById.get(id);
        if (!item)
            return undefined;
        return item.parentId != null
            ? ((_a = allCartPhysicalItemsById.get(item.parentId)) !== null && _a !== void 0 ? _a : item)
            : item;
    })), 'id');
}
/**
 * Group changed items by consignment. Displayed destination numbers match the original consignment order
 * (e.g. Destination 1 and Destination 3 when destination 2 has no changed items).
 * Returns null when there is at most one consignment or no groups with changed items.
 */
function groupChangedItemsByConsignment(cart, consignments, changedItemsToShow) {
    if (!cart || !consignments || consignments.length <= 1) {
        return null;
    }
    const changedIds = new Set(changedItemsToShow.map((item) => item.id));
    const groups = [];
    let consignmentNumber = 0;
    consignments.forEach((consignment) => {
        consignmentNumber += 1;
        const allItems = (0,_shipping_findLineItems__WEBPACK_IMPORTED_MODULE_1__["default"])(cart, consignment);
        const items = allItems.filter((item) => changedIds.has(item.id));
        if (items.length > 0) {
            groups.push({ consignment, consignmentNumber, items });
        }
    });
    return groups.length > 0 ? groups : null;
}


/***/ },

/***/ "./packages/core/src/app/payment/createPaymentFormService.ts"
/*!*******************************************************************!*\
  !*** ./packages/core/src/app/payment/createPaymentFormService.ts ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPaymentFormService)
/* harmony export */ });
function createPaymentFormService(formikContext, formContext, paymentContext) {
    const { setFieldTouched, setFieldValue, submitForm, validateForm, values } = formikContext;
    const { isSubmitted, setSubmitted } = formContext;
    const { disableSubmit, setSubmit, setValidationSchema, hidePaymentSubmitButton } = paymentContext;
    const getFieldValue = (key) => values[key];
    return {
        disableSubmit,
        getFieldValue,
        getFormValues: () => values,
        hidePaymentSubmitButton,
        isSubmitted: () => isSubmitted,
        setFieldTouched: setFieldTouched,
        setFieldValue: setFieldValue,
        setSubmit,
        setSubmitted,
        setValidationSchema,
        submitForm,
        validateForm,
    };
}


/***/ },

/***/ "./packages/core/src/app/payment/creditCard/unformatCreditCardExpiryDate.ts"
/*!**********************************************************************************!*\
  !*** ./packages/core/src/app/payment/creditCard/unformatCreditCardExpiryDate.ts ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unformatCreditCardExpiryDate)
/* harmony export */ });
function unformatCreditCardExpiryDate(value) {
    const separator = '/';
    const [month = '', year = ''] = value.split(new RegExp(`\\s*${separator}\\s*`));
    if (!/^\d+$/.test(month) || !/^\d+$/.test(year)) {
        return { month: '', year: '' };
    }
    return {
        month: month.length === 1 ? `0${month}` : month.slice(0, 2),
        year: year.length === 2 ? `20${year}` : year.slice(0, 4),
    };
}


/***/ },

/***/ "./packages/core/src/app/payment/creditCard/unformatCreditCardNumber.ts"
/*!******************************************************************************!*\
  !*** ./packages/core/src/app/payment/creditCard/unformatCreditCardNumber.ts ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unformatCreditCardNumber)
/* harmony export */ });
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! card-validator */ "./node_modules/card-validator/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(card_validator__WEBPACK_IMPORTED_MODULE_0__);

function unformatCreditCardNumber(value, separator = ' ') {
    const { card } = (0,card_validator__WEBPACK_IMPORTED_MODULE_0__.number)(value);
    if (!card) {
        return value;
    }
    return value.replace(new RegExp(separator, 'g'), '');
}


/***/ },

/***/ "./packages/core/src/app/payment/getPaymentValidationSchema.ts"
/*!*********************************************************************!*\
  !*** ./packages/core/src/app/payment/getPaymentValidationSchema.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPaymentValidationSchema)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _termsConditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../termsConditions */ "./packages/core/src/app/termsConditions/getTermsConditionsValidationSchema.ts");


function getPaymentValidationSchema({ additionalValidation, isPaymentDataRequired = true, isTermsConditionsRequired, language, }) {
    const schemaFields = {
        paymentProviderRadio: isPaymentDataRequired ? (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required() : (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)(),
    };
    const schemaFieldsWithTerms = (0,yup__WEBPACK_IMPORTED_MODULE_0__.object)(schemaFields).concat((0,_termsConditions__WEBPACK_IMPORTED_MODULE_1__["default"])({ isTermsConditionsRequired, language }));
    return additionalValidation
        ? schemaFieldsWithTerms.concat(additionalValidation)
        : schemaFieldsWithTerms;
}


/***/ },

/***/ "./packages/core/src/app/payment/groupPaymentMethodsByPrefix.ts"
/*!**********************************************************************!*\
  !*** ./packages/core/src/app/payment/groupPaymentMethodsByPrefix.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GROUPED_METHOD_ID_PREFIXES: () => (/* binding */ GROUPED_METHOD_ID_PREFIXES),
/* harmony export */   groupPaymentMethodsByPrefix: () => (/* binding */ groupPaymentMethodsByPrefix)
/* harmony export */ });
// Payment method ids with any of these prefixes may be merged when grouping is enabled
const GROUPED_METHOD_ID_PREFIXES = ['facilypay_'];
const selectAndSortPaymentMethodsByPrefix = (methods, prefix) => {
    const group = methods.filter((m) => m.id.startsWith(prefix));
    if (group.length <= 1) {
        return undefined;
    }
    return [...group].sort((a, b) => {
        const toNum = (id) => parseInt(id.slice(prefix.length), 10) || 0;
        return toNum(a.id) - toNum(b.id);
    });
};
const buildGroupedPaymentMethodRepresentative = (sortedGroup) => {
    var _a;
    const [first] = sortedGroup;
    return Object.assign(Object.assign({}, first), { config: Object.assign(Object.assign({}, first.config), { displayName: (_a = first.config.displayName) === null || _a === void 0 ? void 0 : _a.replace(/^\d+x\s+/i, '') }), initializationData: Object.assign(Object.assign({}, first.initializationData), { groupedMethods: sortedGroup }) });
};
const flatMapGroupedPaymentMethodRepresentativeIntoList = (methods, prefix, representativeSourceId, representative) => methods.flatMap((m) => {
    if (!m.id.startsWith(prefix)) {
        return [m];
    }
    if (m.id === representativeSourceId) {
        return [representative];
    }
    return [];
});
const groupPaymentMethodsByPrefix = (methods, prefix) => {
    const sortedGroup = selectAndSortPaymentMethodsByPrefix(methods, prefix);
    if (!sortedGroup) {
        return methods;
    }
    const representative = buildGroupedPaymentMethodRepresentative(sortedGroup);
    return flatMapGroupedPaymentMethodRepresentativeIntoList(methods, prefix, representative.id, representative);
};


/***/ },

/***/ "./packages/core/src/app/payment/mapSubmitOrderErrorMessage.ts"
/*!*********************************************************************!*\
  !*** ./packages/core/src/app/payment/mapSubmitOrderErrorMessage.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mapSubmitOrderErrorMessage),
/* harmony export */   mapSubmitOrderErrorTitle: () => (/* binding */ mapSubmitOrderErrorTitle)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function mapSubmitOrderErrorMessage(error, translate, shouldLocalise) {
    switch (error.type) {
        case 'not_initialized':
            return translate('payment.payment_error');
        case 'custom_provider_execute_error':
            return translate(error.subtype);
        case 'payment_cancelled':
            return translate('payment.payment_cancelled');
        case 'payment_method_invalid':
            return translate('payment.payment_method_disabled_error');
        case 'tax_provider_unavailable':
            return translate('payment.tax_provider_unavailable');
        case 'cart_changed':
            return translate('shipping.cart_change_error');
        case 'cart_consistency':
            return translate('cart.consistency_error');
        case 'empty_cart':
            return translate('cart.empty_cart_error_message');
        default:
            if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)([
                'order_could_not_be_finalized_error',
                'provider_fatal_error',
                'payment_invalid',
                'provider_error',
                'provider_widget_error',
                'user_payment_error',
            ], error.body && error.body.type)) {
                return translate('payment.payment_method_error', { message: error.message });
            }
            if (shouldLocalise && error.body && error.body.errors && error.body.errors.length) {
                const messages = error.body.errors.map((err) => translate(`payment.errors.${err.code}`));
                return messages.join(' ');
            }
            if (error.message) {
                return error.message;
            }
            return error.type === 'unrecoverable'
                ? translate('common.unavailable_error')
                : translate('payment.place_order_error');
    }
}
function mapSubmitOrderErrorTitle(error, translate) {
    if (error.type === 'unrecoverable') {
        return translate('common.unavailable_heading');
    }
    if (error.type === 'missing_shipping_method') {
        return translate('common.missing_shipping_method_heading');
    }
    if (error.type === 'invalid_shipping_address') {
        return translate('common.invalid_shipping_address');
    }
    return translate('common.error_heading');
}


/***/ },

/***/ "./packages/core/src/app/payment/mapToOrderRequestBody.ts"
/*!****************************************************************!*\
  !*** ./packages/core/src/app/payment/mapToOrderRequestBody.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mapToOrderRequestBody)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _creditCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creditCard */ "./packages/core/src/app/payment/creditCard/unformatCreditCardNumber.ts");
/* harmony import */ var _creditCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./creditCard */ "./packages/core/src/app/payment/creditCard/unformatCreditCardExpiryDate.ts");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/getUniquePaymentMethodId.ts");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paymentMethod */ "./packages/core/src/app/payment/paymentMethod/CreditCardFieldsetValues.ts");




function mapToOrderRequestBody(values, isPaymentDataRequired) {
    if (!isPaymentDataRequired) {
        return {};
    }
    const { paymentProviderRadio, methodIdOverride } = values, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(values, ["paymentProviderRadio", "methodIdOverride"]);
    const { methodId: baseMethodId, gatewayId } = (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_4__.parseUniquePaymentMethodId)(paymentProviderRadio);
    const methodId = typeof methodIdOverride === 'string' ? methodIdOverride || baseMethodId : baseMethodId;
    const payload = {
        payment: { gatewayId, methodId },
    };
    const paymentData = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.omitBy)(Object.assign(Object.assign({}, rest), { ccExpiry: (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_5__.hasCreditCardExpiry)(values)
            ? (0,_creditCard__WEBPACK_IMPORTED_MODULE_3__["default"])(values.ccExpiry)
            : null, ccNumber: (0,_paymentMethod__WEBPACK_IMPORTED_MODULE_5__.hasCreditCardNumber)(values)
            ? (0,_creditCard__WEBPACK_IMPORTED_MODULE_2__["default"])(values.ccNumber)
            : null }), lodash__WEBPACK_IMPORTED_MODULE_1__.isNil);
    if (payload.payment && !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(paymentData)) {
        payload.payment.paymentData = paymentData;
    }
    return payload;
}


/***/ },

/***/ "./packages/core/src/app/payment/orderExtraFields/OrderExtraFieldsFieldset.tsx"
/*!*************************************************************************************!*\
  !*** ./packages/core/src/app/payment/orderExtraFields/OrderExtraFieldsFieldset.tsx ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_sdk_essential__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/essential */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/checkout-sdk-essential.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/DynamicFormField/DynamicFormField.tsx");



const OrderExtraFieldsFieldset = ({ formFields, }) => {
    const extraFields = formFields.filter((field) => (0,_bigcommerce_checkout_sdk_essential__WEBPACK_IMPORTED_MODULE_0__.isExtraField)(field));
    if (extraFields.length === 0) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-test": "order-extra-fields" }, extraFields.map((field) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_2__["default"], { field: field, key: `${field.id}-${field.name}`, label: field.label, parentFieldName: "orderExtraFields" })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderExtraFieldsFieldset);


/***/ },

/***/ "./packages/core/src/app/payment/orderExtraFields/getInitialOrderExtraFieldsValues.ts"
/*!********************************************************************************************!*\
  !*** ./packages/core/src/app/payment/orderExtraFields/getInitialOrderExtraFieldsValues.ts ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getInitialOrderExtraFieldsValues)
/* harmony export */ });
function getInitialOrderExtraFieldsValues(orderExtraFields, storedOrderExtraFields) {
    return (orderExtraFields !== null && orderExtraFields !== void 0 ? orderExtraFields : []).reduce((acc, field) => {
        var _a;
        const raw = storedOrderExtraFields === null || storedOrderExtraFields === void 0 ? void 0 : storedOrderExtraFields[field.name];
        acc[field.name] =
            typeof raw === 'string' || typeof raw === 'number' ? raw : ((_a = field.default) !== null && _a !== void 0 ? _a : '');
        return acc;
    }, {});
}


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethod/CreditCardFieldsetValues.ts"
/*!*********************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/CreditCardFieldsetValues.ts ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasCreditCardExpiry: () => (/* binding */ hasCreditCardExpiry),
/* harmony export */   hasCreditCardNumber: () => (/* binding */ hasCreditCardNumber)
/* harmony export */ });
function hasCreditCardNumber(values) {
    if (!(values instanceof Object)) {
        return false;
    }
    return 'ccNumber' in values;
}
function hasCreditCardExpiry(values) {
    if (!(values instanceof Object)) {
        return false;
    }
    return 'ccExpiry' in values;
}


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethod/CustomChecklistItem.tsx"
/*!*****************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/CustomChecklistItem.tsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CustomChecklistItem = ({ content, htmlId }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "form-checklist-item optimizedCheckout-form-checklist-item custom-checklist-item", id: htmlId }, content));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(CustomChecklistItem));


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethod/HostedCreditCardFieldsetValues.ts"
/*!***************************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/HostedCreditCardFieldsetValues.ts ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isHostedCreditCardFieldsetValues: () => (/* binding */ isHostedCreditCardFieldsetValues)
/* harmony export */ });
function isHostedCreditCardFieldsetValues(value) {
    if (!(value instanceof Object)) {
        return false;
    }
    if (!('hostedForm' in value)) {
        return false;
    }
    return true;
}


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethod/PaymentMethodList.tsx"
/*!***************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/PaymentMethodList.tsx ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/locale/useLocale.ts");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Checklist/Checklist.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/ChecklistItem/ChecklistItem.tsx");
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/form */ "./packages/core/src/app/common/form/connectFormik.tsx");
/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/utility */ "./packages/core/src/app/common/utility/isMobile.ts");
/* harmony import */ var _CustomChecklistItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CustomChecklistItem */ "./packages/core/src/app/payment/paymentMethod/CustomChecklistItem.tsx");
/* harmony import */ var _getPaymentMethodName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getPaymentMethodName */ "./packages/core/src/app/payment/paymentMethod/getPaymentMethodName.ts");
/* harmony import */ var _getUniquePaymentMethodId__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getUniquePaymentMethodId */ "./packages/core/src/app/payment/paymentMethod/getUniquePaymentMethodId.ts");
/* harmony import */ var _PaymentMethodTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PaymentMethodTitle */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodTitle.tsx");
/* harmony import */ var _PaymentMethodV2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PaymentMethodV2 */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodV2.tsx");
/* harmony import */ var _usePoMethodDisabledReason__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./usePoMethodDisabledReason */ "./packages/core/src/app/payment/paymentMethod/usePoMethodDisabledReason.ts");












function getPaymentMethodFromListValue(methods, value) {
    const { gatewayId: gateway, methodId: id } = (0,_getUniquePaymentMethodId__WEBPACK_IMPORTED_MODULE_10__.parseUniquePaymentMethodId)(value);
    const method = gateway ? (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(methods, { gateway, id }) : (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(methods, { id });
    if (!method) {
        throw new Error(`Unable to find payment method with id: ${id}`);
    }
    return method;
}
const PaymentMethodList = ({ formik: { values }, isEmbedded, isInitializingPayment, isUsingMultiShipping, methods, onSelect = lodash__WEBPACK_IMPORTED_MODULE_0__.noop, onUnhandledError, }) => {
    const { language } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useLocale)();
    const { checkoutState: { data: { getConfig }, }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_3__.useCheckout)();
    const config = getConfig();
    const chequeMethod = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(methods, { id: 'cheque' });
    const chequeDisabledReason = (0,_usePoMethodDisabledReason__WEBPACK_IMPORTED_MODULE_13__.usePoMethodDisabledReason)(chequeMethod);
    const titleText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        if (config && values.paymentProviderRadio) {
            const checkoutSettings = config.checkoutSettings;
            const cdnBasePath = config.cdnPath;
            const storeCountryCode = config.storeProfile.storeCountryCode;
            const paymentMethod = getPaymentMethodFromListValue(methods, values.paymentProviderRadio);
            const methodName = (0,_getPaymentMethodName__WEBPACK_IMPORTED_MODULE_9__["default"])(language)(paymentMethod);
            const { titleText } = (0,_PaymentMethodTitle__WEBPACK_IMPORTED_MODULE_11__.getPaymentMethodTitle)(language, cdnBasePath, checkoutSettings, storeCountryCode)(paymentMethod);
            return titleText || methodName;
        }
        return '';
    }, [config, values.paymentProviderRadio]);
    const handleSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value) => {
        onSelect(getPaymentMethodFromListValue(methods, value));
    }, [methods, onSelect]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "aria-live": "assertive", className: "is-srOnly", role: "status" }, titleText),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_4__["default"], { defaultSelectedItemId: values.paymentProviderRadio, isDisabled: isInitializingPayment, name: "paymentProviderRadio", onSelect: handleSelect }, methods.map((method) => {
            const value = (0,_getUniquePaymentMethodId__WEBPACK_IMPORTED_MODULE_10__["default"])(method.id, method.gateway);
            const showOnlyOnMobileDevices = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(method, 'initializationData.showOnlyOnMobileDevices', false);
            if (showOnlyOnMobileDevices && !(0,_common_utility__WEBPACK_IMPORTED_MODULE_7__["default"])()) {
                return;
            }
            return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(PaymentMethodListItem, { disabledReason: method === chequeMethod ? chequeDisabledReason : undefined, isDisabled: isInitializingPayment, isEmbedded: isEmbedded, isUsingMultiShipping: isUsingMultiShipping, key: value, method: method, onUnhandledError: onUnhandledError, value: value }));
        }))));
};
const PaymentMethodListItem = ({ disabledReason, isDisabled, isEmbedded, isUsingMultiShipping, method, onUnhandledError, value, }) => {
    var _a;
    const renderPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_PaymentMethodV2__WEBPACK_IMPORTED_MODULE_12__["default"], { isEmbedded: isEmbedded, isUsingMultiShipping: isUsingMultiShipping, method: method, onUnhandledError: onUnhandledError || lodash__WEBPACK_IMPORTED_MODULE_0__.noop }));
    }, [isEmbedded, isUsingMultiShipping, method, onUnhandledError]);
    const renderPaymentMethodTitle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((isSelected) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_PaymentMethodTitle__WEBPACK_IMPORTED_MODULE_11__["default"], { disabledReason: disabledReason, isSelected: isSelected, method: method, onUnhandledError: onUnhandledError })), [disabledReason, method]);
    if ((_a = method.initializationData) === null || _a === void 0 ? void 0 : _a.isCustomChecklistItem) {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CustomChecklistItem__WEBPACK_IMPORTED_MODULE_8__["default"], { content: renderPaymentMethod, htmlId: `radio-${value}` });
    }
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { content: renderPaymentMethod, htmlId: `radio-${value}`, isDisabled: isDisabled || Boolean(disabledReason), label: renderPaymentMethodTitle, value: value }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_form__WEBPACK_IMPORTED_MODULE_6__["default"])((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(PaymentMethodList)));


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethod/PaymentMethodProviderType.ts"
/*!**********************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/PaymentMethodProviderType.ts ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var PaymentMethodProviderType;
(function (PaymentMethodProviderType) {
    PaymentMethodProviderType["Api"] = "PAYMENT_TYPE_API";
    PaymentMethodProviderType["Hosted"] = "PAYMENT_TYPE_HOSTED";
    PaymentMethodProviderType["Offline"] = "PAYMENT_TYPE_OFFLINE";
    PaymentMethodProviderType["PPSDK"] = "PAYMENT_TYPE_SDK";
})(PaymentMethodProviderType || (PaymentMethodProviderType = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentMethodProviderType);


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethod/PaymentMethodTitle.tsx"
/*!****************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/PaymentMethodTitle.tsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getPaymentMethodTitle: () => (/* binding */ getPaymentMethodTitle)
/* harmony export */ });
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! card-validator */ "./node_modules/card-validator/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(card_validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_checkout_bigcommerce_payments_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/bigcommerce-payments-utils */ "./packages/bigcommerce-payments-utils/src/BigCommercePaymentsPayLaterBanner.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/capabilities/CapabilitiesContext.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_paypal_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/paypal-utils */ "./packages/paypal-utils/src/PaypalCommerceCreditBanner.tsx");
/* harmony import */ var _bigcommerce_checkout_paypal_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/paypal-utils */ "./packages/paypal-utils/src/BraintreePaypalCreditBanner.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/CreditCardIconList.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/icon/mapFromPaymentMethodCardType.ts");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/form */ "./packages/core/src/app/common/form/connectFormik.tsx");
/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/utility */ "./packages/core/src/app/common/utility/isExperimentEnabled.ts");
/* harmony import */ var _CreditCardFieldsetValues__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CreditCardFieldsetValues */ "./packages/core/src/app/payment/paymentMethod/CreditCardFieldsetValues.ts");
/* harmony import */ var _getPaymentMethodDisplayName__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./getPaymentMethodDisplayName */ "./packages/core/src/app/payment/paymentMethod/getPaymentMethodDisplayName.tsx");
/* harmony import */ var _getPaymentMethodName__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./getPaymentMethodName */ "./packages/core/src/app/payment/paymentMethod/getPaymentMethodName.ts");
/* harmony import */ var _HostedCreditCardFieldsetValues__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./HostedCreditCardFieldsetValues */ "./packages/core/src/app/payment/paymentMethod/HostedCreditCardFieldsetValues.ts");
/* harmony import */ var _PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./PaymentMethodId */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodId.ts");
/* harmony import */ var _PaymentMethodType__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./PaymentMethodType */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodType.ts");


















function getPaymentMethodTitle(language, basePath, checkoutSettings, storeCountryCode) {
    const cdnPath = (path) => `${basePath}${path}`;
    return (method) => {
        var _a, _b;
        const paymentWithLogo = ((_a = method.initializationData) === null || _a === void 0 ? void 0 : _a.methodsWithLogo)
            ? method.initializationData.methodsWithLogo
            : [];
        const methodName = (0,_getPaymentMethodName__WEBPACK_IMPORTED_MODULE_17__["default"])(language)(method);
        const methodDisplayName = (0,_getPaymentMethodDisplayName__WEBPACK_IMPORTED_MODULE_16__["default"])(language)(method);
        // TODO: API could provide the data below so UI can read simply read it.
        // However, I'm not sure how we deal with translation yet. TBC.
        const customTitles = {
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_20__["default"].CreditCard]: {
                logoUrl: '',
                titleText: methodName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].BraintreeVenmo]: {
                logoUrl: method.logoUrl || '',
                titleText: method.logoUrl ? '' : methodDisplayName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].BraintreePaypalCredit]: {
                logoUrl: cdnPath('/img/payment-providers/paypal_commerce_logo_letter.svg'),
                titleText: methodDisplayName,
                subtitle: (props) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_paypal_utils__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({ containerId: "braintree-credit-banner-container" }, props))),
            },
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_20__["default"].PaypalCredit]: {
                logoUrl: cdnPath('/img/payment-providers/paypal_commerce_logo_letter.svg'),
                titleText: methodDisplayName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].BraintreeAch]: {
                logoUrl: method.logoUrl || '',
                titleText: methodDisplayName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].BraintreeLocalPaymentMethod]: {
                logoUrl: method.logoUrl || '',
                titleText: methodDisplayName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].BigCommercePaymentsPayPal]: {
                logoUrl: cdnPath('/img/payment-providers/paypal_commerce_logo.svg'),
                titleText: '',
                subtitle: (props) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_bigcommerce_payments_utils__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({ containerId: "bigcommerce-payments-banner-container" }, props))),
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].BigCommercePaymentsPayLater]: {
                logoUrl: cdnPath('/img/payment-providers/paypal_commerce_logo_letter.svg'),
                titleText: methodDisplayName,
                subtitle: (props) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_bigcommerce_payments_utils__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({ containerId: "bigcommerce-payments-paylater-banner-container" }, props))),
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].BigCommercePaymentsAlternativeMethod]: {
                logoUrl: method.logoUrl || '',
                titleText: method.logoUrl ? '' : methodDisplayName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].PaypalCommerce]: {
                logoUrl: cdnPath('/img/payment-providers/paypal_commerce_logo.svg'),
                titleText: '',
                subtitle: (props) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_paypal_utils__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({ containerId: "paypal-commerce-banner-container" }, props))),
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].PaypalCommerceCredit]: {
                logoUrl: cdnPath('/img/payment-providers/paypal_commerce_logo_letter.svg'),
                titleText: methodDisplayName,
                subtitle: (props) => (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_paypal_utils__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({ containerId: "paypal-commerce-credit-banner-container" }, props))),
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].PaypalCommerceAlternativeMethod]: {
                logoUrl: method.logoUrl || '',
                titleText: method.logoUrl ? '' : methodDisplayName,
            },
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_20__["default"].VisaCheckout]: {
                logoUrl: cdnPath('/img/payment-providers/visa-checkout.png'),
                titleText: methodName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].Affirm]: {
                logoUrl: cdnPath('/img/payment-providers/affirm-checkout-header.png'),
                titleText: language.translate('payment.affirm_display_name_text'),
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].Afterpay]: {
                logoUrl: (0,_common_utility__WEBPACK_IMPORTED_MODULE_14__["default"])(checkoutSettings, 'PROJECT-6993.change_afterpay_logo_for_us_stores') && storeCountryCode === 'US'
                    ? cdnPath('/img/payment-providers/afterpay-new-us.svg')
                    : cdnPath('/img/payment-providers/afterpay-badge-blackonmint.png'),
                titleText: methodName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].AmazonPay]: {
                logoUrl: cdnPath('/img/payment-providers/amazon-header.png'),
                titleText: '',
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].ApplePay]: {
                logoUrl: cdnPath('/modules/checkout/applepay/images/applepay-header@2x.png'),
                titleText: '',
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].Bolt]: {
                logoUrl: '',
                titleText: methodDisplayName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].Clearpay]: {
                logoUrl: cdnPath('/img/payment-providers/clearpay-header.png'),
                titleText: '',
            },
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_20__["default"].GooglePay]: {
                logoUrl: cdnPath('/img/payment-providers/google-pay.png'),
                titleText: '',
            },
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_20__["default"].PayWithGoogle]: {
                logoUrl: cdnPath('/img/payment-providers/google-pay.png'),
                titleText: '',
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].Humm]: {
                logoUrl: cdnPath('/img/payment-providers/humm-checkout-header.png'),
                titleText: '',
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].Klarna]: {
                logoUrl: ((_b = method.initializationData) === null || _b === void 0 ? void 0 : _b.enableBillie)
                    ? cdnPath('/img/payment-providers/klarna-billie-header.png')
                    : cdnPath('/img/payment-providers/klarna-header.png'),
                titleText: methodDisplayName,
            },
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_20__["default"].Paypal]: {
                // TODO: method.id === PaymentMethodId.BraintreeVenmo should be removed after the PAYPAL-1380.checkout_button_strategies_update experiment removal
                logoUrl: method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].BraintreeVenmo && method.logoUrl
                    ? method.logoUrl
                    : cdnPath('/img/payment-providers/paypal.svg'),
                titleText: '',
                subtitle: (props) => {
                    if (method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].BraintreePaypalCredit ||
                        method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].BraintreePaypal) {
                        return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_paypal_utils__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({ containerId: "braintree-banner-container" }, props)));
                    }
                    return null;
                },
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].Quadpay]: {
                logoUrl: cdnPath('/img/payment-providers/quadpay.png'),
                titleText: language.translate('payment.quadpay_display_name_text'),
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].Sezzle]: {
                logoUrl: cdnPath('/img/payment-providers/sezzle-checkout-header.png'),
                titleText: language.translate('payment.sezzle_display_name_text'),
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].Zip]: {
                logoUrl: cdnPath('/img/payment-providers/zip.png'),
                titleText: language.translate('payment.zip_display_name_text'),
            },
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_20__["default"].Barclaycard]: {
                logoUrl: cdnPath(`/img/payment-providers/barclaycard_${method.id.toLowerCase()}.png`),
                titleText: '',
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].AdyenV2]: {
                logoUrl: `https://checkoutshopper-live.adyen.com/checkoutshopper/images/logos/${method.method === 'scheme' ? 'card' : method.method}.svg`,
                titleText: methodDisplayName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].AdyenV3]: {
                logoUrl: `https://checkoutshopper-live.adyen.com/checkoutshopper/images/logos/${method.method === 'scheme' ? 'card' : method.method}.svg`,
                titleText: methodDisplayName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].Mollie]: {
                logoUrl: method.method === 'credit_card'
                    ? ''
                    : cdnPath(`/img/payment-providers/mollie_${method.method}.svg`),
                titleText: methodDisplayName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].Checkoutcom]: {
                logoUrl: ['credit_card', 'card', 'checkoutcom'].includes(method.id)
                    ? ''
                    : cdnPath(`/img/payment-providers/checkoutcom_${method.id.toLowerCase()}.svg`),
                titleText: methodName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].StripeV3]: {
                logoUrl: paymentWithLogo.includes(method.id)
                    ? cdnPath(`/img/payment-providers/stripe-${method.id.toLowerCase()}.svg`)
                    : '',
                titleText: method.method === 'iban'
                    ? language.translate('payment.stripe_sepa_display_name_text')
                    : methodName,
            },
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].StripeUPE]: {
                logoUrl: paymentWithLogo.includes(method.id)
                    ? cdnPath(`/img/payment-providers/stripe-${method.id.toLowerCase()}.svg`)
                    : '',
                titleText: method.method === 'iban'
                    ? language.translate('payment.stripe_sepa_display_name_text')
                    : methodName,
            },
        };
        if (method.gateway === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].WorldpayAccess) {
            if (method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].WorldpayAccessOpenBanking) {
                return { logoUrl: '', titleText: methodDisplayName };
            }
            if (method.id === 'credit_card' || method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].WorldpayAccess) {
                return {
                    logoUrl: '',
                    titleText: language.translate('payment.credit_debit_card_text'),
                };
            }
        }
        if (method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].WorldpayAccess) {
            return { logoUrl: '', titleText: language.translate('payment.credit_debit_card_text') };
        }
        if (method.gateway === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].BlueSnapDirect) {
            if (method.id === 'credit_card') {
                return { logoUrl: '', titleText: methodDisplayName };
            }
            if (method.id === 'ecp') {
                return { logoUrl: '', titleText: methodDisplayName };
            }
            if (method.id === 'banktransfer') {
                return {
                    logoUrl: '',
                    titleText: language.translate('payment.bluesnap_direct_local_bank_transfer_label'),
                };
            }
        }
        if (method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].PaypalCommerceVenmo) {
            return customTitles[_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].PaypalCommerceAlternativeMethod];
        }
        if (method.gateway === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].BigCommercePaymentsAlternativeMethod &&
            method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].Klarna) {
            return {
                logoUrl: cdnPath('/img/payment-providers/klarna.png'),
                titleText: methodDisplayName,
            };
        }
        if (method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].BigCommercePaymentsVenmo) {
            return customTitles[_PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].BigCommercePaymentsAlternativeMethod];
        }
        // KLUDGE: 'paypal' is actually a credit card method. It is the only
        // exception to the rule below. We should probably fix it on API level,
        // but apparently it would break LCO if we are not careful.
        if (method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].PaypalPaymentsPro &&
            method.method === _PaymentMethodType__WEBPACK_IMPORTED_MODULE_20__["default"].CreditCard) {
            return customTitles[_PaymentMethodType__WEBPACK_IMPORTED_MODULE_20__["default"].CreditCard];
        }
        if (method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_19__["default"].Ratepay) {
            return {
                logoUrl: method.logoUrl || '',
                titleText: language.translate('payment.ratepay.payment_method_title'),
            };
        }
        return (customTitles[method.gateway || ''] ||
            customTitles[method.id] ||
            customTitles[method.method] ||
            customTitles[_PaymentMethodType__WEBPACK_IMPORTED_MODULE_20__["default"].CreditCard]);
    };
}
function getInstrumentForMethod(instruments, method, values) {
    const instrumentsForMethod = instruments.filter((instrument) => instrument.provider === method.id);
    const selectedInstrument = instrumentsForMethod.find((instrument) => instrument.bigpayToken === values.instrumentId);
    return selectedInstrument;
}
const PaymentMethodTitle = ({ cdnBasePath, checkoutSettings, storeCountryCode, disabledReason, onUnhandledError, formik: { values }, instruments, isSelected, language, method, }) => {
    var _a, _b;
    const { payment: { poConfig }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_5__.useCapabilities)();
    const methodName = (0,_getPaymentMethodName__WEBPACK_IMPORTED_MODULE_17__["default"])(language)(method);
    const { logoUrl, titleText, subtitle } = getPaymentMethodTitle(language, cdnBasePath, checkoutSettings, storeCountryCode)(method);
    const getSelectedCardType = () => {
        if (!isSelected) {
            return;
        }
        const instrumentSelected = getInstrumentForMethod(instruments, method, values);
        if ((0,_HostedCreditCardFieldsetValues__WEBPACK_IMPORTED_MODULE_18__.isHostedCreditCardFieldsetValues)(values) && values.hostedForm.cardType) {
            return values.hostedForm.cardType;
        }
        if ((0,_CreditCardFieldsetValues__WEBPACK_IMPORTED_MODULE_15__.hasCreditCardNumber)(values) && values.ccNumber) {
            const { card } = (0,card_validator__WEBPACK_IMPORTED_MODULE_0__.number)(values.ccNumber);
            if (!card) {
                return;
            }
            return card.type;
        }
        if (instrumentSelected) {
            return instrumentSelected.brand;
        }
    };
    const getSubtitle = () => {
        const node = subtitle instanceof Function
            ? subtitle({ onUnhandledError, methodId: method.id })
            : subtitle;
        return node ? react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "paymentProviderHeader-subtitleContainer" }, node) : null;
    };
    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('paymentProviderHeader-container', {
            'paymentProviderHeader-container-googlePay': method.id.includes('googlepay'),
        }) },
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('paymentProviderHeader-nameContainer', {
                'paymentProviderHeader-poDisabledContainer': Boolean(disabledReason),
            }), "data-test": `payment-method-${method.id}` },
            logoUrl && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("img", { alt: `${methodName} icon`, className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('paymentProviderHeader-img', { 'paymentProviderHeader-img-applePay': method.id === 'applepay' }, {
                    'paymentProviderHeader-img-googlePay': method.id.includes('googlepay'),
                }), "data-test": "payment-method-logo", src: logoUrl })),
            titleText && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "paymentProviderHeader-name sub-header", "data-test": "payment-method-name" }, titleText)),
            disabledReason && titleText && (react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "paymentProviderHeader-poDisabledMessage", "data-test": `payment-method-disabled-${method.id}` }, disabledReason === 'creditLimit' ? (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"], { id: "payment.errors.disabled_PO_number_credit" })) : (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_6__["default"], { data: {
                    currency: (_b = (_a = poConfig === null || poConfig === void 0 ? void 0 : poConfig.creditLimitCheck) === null || _a === void 0 ? void 0 : _a.currency) !== null && _b !== void 0 ? _b : '',
                    name: titleText,
                }, id: "payment.errors.disabled_PO_number_currency_mismatch" })))),
            getSubtitle()),
        react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", { className: "paymentProviderHeader-cc" },
            react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_10__["default"], { cardTypes: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.compact)(method.supportedCards.map(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_11__["default"])), selectedCardType: getSelectedCardType() }))));
};
function mapToCheckoutProps({ checkoutState }) {
    const { data: { getConfig, getInstruments }, } = checkoutState;
    const config = getConfig();
    const instruments = getInstruments() || [];
    if (!config) {
        return null;
    }
    const storeCountryCode = config.storeProfile.storeCountryCode;
    return {
        instruments,
        checkoutSettings: config.checkoutSettings,
        storeCountryCode,
        cdnBasePath: config.cdnPath,
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_form__WEBPACK_IMPORTED_MODULE_13__["default"])((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_checkout__WEBPACK_IMPORTED_MODULE_12__["default"])(mapToCheckoutProps)((0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(PaymentMethodTitle)))));


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethod/PaymentMethodType.ts"
/*!**************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/PaymentMethodType.ts ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var PaymentMethodType;
(function (PaymentMethodType) {
    PaymentMethodType["ApplePay"] = "applepay";
    PaymentMethodType["Barclaycard"] = "barclaycard";
    PaymentMethodType["CreditCard"] = "credit-card";
    PaymentMethodType["GooglePay"] = "googlepay";
    PaymentMethodType["PayWithGoogle"] = "paywithgoogle";
    PaymentMethodType["MultiOption"] = "multi-option";
    PaymentMethodType["Paypal"] = "paypal";
    PaymentMethodType["PaypalCredit"] = "paypal-credit";
    PaymentMethodType["PaypalVenmo"] = "paypal-venmo";
    PaymentMethodType["VisaCheckout"] = "visa-checkout";
})(PaymentMethodType || (PaymentMethodType = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentMethodType);


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethod/PaymentMethodV2.tsx"
/*!*************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/PaymentMethodV2.tsx ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/paymentForm/PaymentFormProvider.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/loading/LazyContainer.tsx");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../checkout */ "./packages/core/src/app/checkout/withCheckout.tsx");
/* harmony import */ var _common_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/form */ "./packages/core/src/app/common/form/connectFormik.tsx");
/* harmony import */ var _createPaymentFormService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../createPaymentFormService */ "./packages/core/src/app/payment/createPaymentFormService.ts");
/* harmony import */ var _resolvePaymentMethod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resolvePaymentMethod */ "./packages/core/src/app/payment/resolvePaymentMethod.ts");
/* harmony import */ var _withForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../withForm */ "./packages/core/src/app/payment/withForm.tsx");
/* harmony import */ var _withPayment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../withPayment */ "./packages/core/src/app/payment/withPayment.tsx");










const PaymentMethodV1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | payment-method-v1 */ "payment-method-v1").then(__webpack_require__.bind(__webpack_require__, /*! ./PaymentMethod */ "./packages/core/src/app/payment/paymentMethod/PaymentMethod.tsx")));
const PaymentMethodContainer = ({ formik: formikContext, checkoutService, checkoutState, disableSubmit, hidePaymentSubmitButton, isEmbedded, isSubmitted, isUsingMultiShipping, language, method, onUnhandledError, setSubmit, setSubmitted, setValidationSchema, }) => {
    const formContext = {
        isSubmitted,
        setSubmitted,
    };
    const paymentContext = {
        disableSubmit,
        hidePaymentSubmitButton,
        setSubmit,
        setValidationSchema,
    };
    const ResolvedPaymentMethod = (0,_resolvePaymentMethod__WEBPACK_IMPORTED_MODULE_7__["default"])({
        id: method.id,
        gateway: method.gateway,
        type: method.type,
    });
    if (!ResolvedPaymentMethod) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_3__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PaymentMethodV1, { isEmbedded: isEmbedded, isUsingMultiShipping: isUsingMultiShipping, method: method, onUnhandledError: onUnhandledError })));
    }
    const paymentForm = (0,_createPaymentFormService__WEBPACK_IMPORTED_MODULE_6__["default"])(formikContext, formContext, paymentContext);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.PaymentFormProvider, { paymentForm: paymentForm },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ResolvedPaymentMethod, { checkoutService: checkoutService, checkoutState: checkoutState, language: language, method: method, onUnhandledError: onUnhandledError, paymentForm: paymentForm }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_checkout__WEBPACK_IMPORTED_MODULE_4__["default"])((props) => props)((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_withPayment__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_withForm__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_common_form__WEBPACK_IMPORTED_MODULE_5__["default"])(PaymentMethodContainer))))));


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethod/getPaymentMethodDisplayName.tsx"
/*!*************************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/getPaymentMethodDisplayName.tsx ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPaymentMethodDisplayName)
/* harmony export */ });
/* harmony import */ var _PaymentMethodId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentMethodId */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodId.ts");

function getPaymentMethodDisplayName(language) {
    return (method) => {
        const { displayName } = method.config;
        const isCreditCard = (displayName === null || displayName === void 0 ? void 0 : displayName.toLowerCase()) === 'credit card';
        if (method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_0__["default"].PaypalCommerceCredit ||
            method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_0__["default"].BigCommercePaymentsPayLater ||
            method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_0__["default"].BraintreePaypalCredit) {
            const { payPalCreditProductBrandName } = method.initializationData;
            if (payPalCreditProductBrandName) {
                return payPalCreditProductBrandName.credit || payPalCreditProductBrandName;
            }
            return 'Pay Later';
        }
        if (method.gateway === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_0__["default"].WorldpayAccess &&
            method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_0__["default"].WorldpayAccessOpenBanking) {
            return language.translate('payment.open_banking_display_name_text');
        }
        if ((isCreditCard && method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_0__["default"].AdyenV2) ||
            method.id === _PaymentMethodId__WEBPACK_IMPORTED_MODULE_0__["default"].AdyenV3) {
            return language.translate('payment.credit_debit_card_text');
        }
        if (isCreditCard) {
            return language.translate('payment.credit_card_text');
        }
        return displayName || '';
    };
}


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethod/getPaymentMethodName.ts"
/*!*****************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/getPaymentMethodName.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPaymentMethodName),
/* harmony export */   getTranslatedPaymentMethodName: () => (/* binding */ getTranslatedPaymentMethodName)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentMethodId */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodId.ts");
/* harmony import */ var _PaymentMethodType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PaymentMethodType */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodType.ts");



/**
 * Always return the translated name of a payment method unless it is a
 * multi-option payment method or it doesn't have any translation. It's possible
 * to translate the gateway name of multi-option methods, i.e.: AfterPay.
 * However, because the options provided by the gateway can vary a lot, i.e.:
 * "Pay by Installment", therefore it's not feasible to do the translation on
 * the UI level.
 */
function getPaymentMethodName(language) {
    return (method) => {
        let name = getTranslatedPaymentMethodName(language)(method);
        if (!name || method.method === _PaymentMethodType__WEBPACK_IMPORTED_MODULE_2__["default"].MultiOption) {
            name = method.config && method.config.displayName;
        }
        if (!name) {
            name = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(method, 'initializationData.paymentData.cardData.digital_wallet_type') ||
                method.method ||
                method.id);
        }
        return name;
    };
}
function getTranslatedPaymentMethodName(language) {
    return (method) => {
        const translations = {
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__["default"].Affirm]: language.translate('payment.affirm_name_text'),
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__["default"].Afterpay]: language.translate('payment.afterpay_name_text'),
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__["default"].AmazonPay]: language.translate('payment.amazon_name_text'),
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__["default"].Bolt]: language.translate('payment.bolt_name_text'),
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__["default"].Clearpay]: language.translate('payment.clearpay_name_text'),
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_2__["default"].GooglePay]: language.translate('payment.google_pay_name_text'),
            [_PaymentMethodId__WEBPACK_IMPORTED_MODULE_1__["default"].Klarna]: language.translate('payment.klarna_name_text'),
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_2__["default"].Paypal]: language.translate('payment.paypal_name_text'),
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_2__["default"].PaypalCredit]: language.translate('payment.paypal_credit_name_text'),
            [_PaymentMethodType__WEBPACK_IMPORTED_MODULE_2__["default"].VisaCheckout]: language.translate('payment.vco_name_text'),
        };
        return translations[method.id] || translations[method.method];
    };
}


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethod/getUniquePaymentMethodId.ts"
/*!*********************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/getUniquePaymentMethodId.ts ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUniquePaymentMethodId),
/* harmony export */   parseUniquePaymentMethodId: () => (/* binding */ parseUniquePaymentMethodId)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function getUniquePaymentMethodId(methodId, gatewayId) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.compact)([gatewayId, methodId]).join('-');
}
function parseUniquePaymentMethodId(value) {
    const [gatewayId, methodId] = value.includes('-') ? value.split('-') : [undefined, value];
    return { gatewayId, methodId };
}


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethod/usePoMethodDisabledReason.ts"
/*!**********************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethod/usePoMethodDisabledReason.ts ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPoMethodDisabledReason: () => (/* binding */ getPoMethodDisabledReason),
/* harmony export */   usePoMethodDisabledReason: () => (/* binding */ usePoMethodDisabledReason)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/capabilities/CapabilitiesContext.tsx");
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");


function getPoMethodDisabledReason({ method, poConfig, grandTotal, cartCurrencyCode, }) {
    var _a, _b;
    const creditLimit = (_a = poConfig === null || poConfig === void 0 ? void 0 : poConfig.creditLimitCheck) === null || _a === void 0 ? void 0 : _a.creditLimit;
    const expectedCurrency = (_b = poConfig === null || poConfig === void 0 ? void 0 : poConfig.creditLimitCheck) === null || _b === void 0 ? void 0 : _b.currency;
    const isNotPoMethod = method.id !== 'cheque';
    const isPoConfigIncomplete = creditLimit == null || !expectedCurrency;
    const isCartDataMissing = grandTotal == null || !cartCurrencyCode;
    if (isNotPoMethod || isPoConfigIncomplete || isCartDataMissing) {
        return null;
    }
    if (expectedCurrency.toUpperCase() !== cartCurrencyCode.toUpperCase()) {
        return 'currencyMismatch';
    }
    if (grandTotal > creditLimit) {
        return 'creditLimit';
    }
    return null;
}
function usePoMethodDisabledReason(method) {
    const { selectedState } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)(({ data }) => {
        var _a, _b;
        return ({
            grandTotal: (_a = data.getCheckout()) === null || _a === void 0 ? void 0 : _a.grandTotal,
            cartCurrencyCode: (_b = data.getCart()) === null || _b === void 0 ? void 0 : _b.currency.code,
        });
    });
    const { payment: { poConfig }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_1__.useCapabilities)();
    const grandTotal = selectedState === null || selectedState === void 0 ? void 0 : selectedState.grandTotal;
    const cartCurrencyCode = selectedState === null || selectedState === void 0 ? void 0 : selectedState.cartCurrencyCode;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        var _a;
        if (!method) {
            return undefined;
        }
        return ((_a = getPoMethodDisabledReason({
            method,
            poConfig,
            grandTotal,
            cartCurrencyCode,
        })) !== null && _a !== void 0 ? _a : undefined);
    }, [method, poConfig, grandTotal, cartCurrencyCode]);
}


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethodFilters/applyPaymentMethodFilters.ts"
/*!*****************************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethodFilters/applyPaymentMethodFilters.ts ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyPaymentMethodFilters: () => (/* binding */ applyPaymentMethodFilters)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_stripe_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout/stripe-utils */ "./packages/stripe-utils/src/stripeMethodsFiltering.ts");
/* harmony import */ var _boltAndBraintreeFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boltAndBraintreeFilter */ "./packages/core/src/app/payment/paymentMethodFilters/boltAndBraintreeFilter.ts");
/* harmony import */ var _checkPaymentMethodFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkPaymentMethodFilter */ "./packages/core/src/app/payment/paymentMethodFilters/checkPaymentMethodFilter.ts");
/* harmony import */ var _multiShippingFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multiShippingFilter */ "./packages/core/src/app/payment/paymentMethodFilters/multiShippingFilter.ts");
/* harmony import */ var _selectedHostedPaymentFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectedHostedPaymentFilter */ "./packages/core/src/app/payment/paymentMethodFilters/selectedHostedPaymentFilter.ts");





// Order matters. selectedHostedPaymentFilter must run last because it can
// collapse the list to a single method when a hosted payment is already in flight.
const FILTERS = [
    _checkPaymentMethodFilter__WEBPACK_IMPORTED_MODULE_2__.checkPaymentMethodFilter,
    _bigcommerce_checkout_stripe_utils__WEBPACK_IMPORTED_MODULE_0__["default"],
    _boltAndBraintreeFilter__WEBPACK_IMPORTED_MODULE_1__.boltAndBraintreeFilter,
    _multiShippingFilter__WEBPACK_IMPORTED_MODULE_3__.multiShippingFilter,
    _selectedHostedPaymentFilter__WEBPACK_IMPORTED_MODULE_4__.selectedHostedPaymentFilter,
];
function applyPaymentMethodFilters(methods, context) {
    return FILTERS.reduce((acc, filter) => filter.apply(acc, context), methods);
}


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethodFilters/boltAndBraintreeFilter.ts"
/*!**************************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethodFilters/boltAndBraintreeFilter.ts ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boltAndBraintreeFilter: () => (/* binding */ boltAndBraintreeFilter)
/* harmony export */ });
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../paymentMethod */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodId.ts");

const boltAndBraintreeFilter = {
    name: 'boltAndBraintree',
    apply(methods) {
        return methods.filter((method) => {
            if (method.id === _paymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"].Bolt && method.initializationData) {
                return Boolean(method.initializationData.showInCheckout);
            }
            return method.id !== _paymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"].BraintreeLocalPaymentMethod;
        });
    },
};


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethodFilters/checkPaymentMethodFilter.ts"
/*!****************************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethodFilters/checkPaymentMethodFilter.ts ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkPaymentMethodFilter: () => (/* binding */ checkPaymentMethodFilter)
/* harmony export */ });
const checkPaymentMethodFilter = {
    name: 'checkPaymentMethodFilter',
    apply(methods, { capabilities }) {
        if (capabilities === null || capabilities === void 0 ? void 0 : capabilities.payment.hideCheckPaymentMethod) {
            return methods.filter((method) => method.id !== 'cheque');
        }
        return methods;
    },
};


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethodFilters/getFilteredPaymentMethodsWithDefault.ts"
/*!****************************************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethodFilters/getFilteredPaymentMethodsWithDefault.ts ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFilteredPaymentMethodsWithDefault: () => (/* binding */ getFilteredPaymentMethodsWithDefault)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/utility */ "./packages/core/src/app/common/utility/isExperimentEnabled.ts");
/* harmony import */ var _groupPaymentMethodsByPrefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../groupPaymentMethodsByPrefix */ "./packages/core/src/app/payment/groupPaymentMethodsByPrefix.ts");
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../paymentMethod */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodProviderType.ts");
/* harmony import */ var _applyPaymentMethodFilters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./applyPaymentMethodFilters */ "./packages/core/src/app/payment/paymentMethodFilters/applyPaymentMethodFilters.ts");





const selectDefaultMethod = (filteredMethods, checkout) => {
    const hasSelectedHostedPayment = checkout.payments
        ? Boolean((0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(checkout.payments, { providerType: _paymentMethod__WEBPACK_IMPORTED_MODULE_3__["default"].Hosted }))
        : false;
    if (hasSelectedHostedPayment) {
        return filteredMethods[0];
    }
    const methodWithDefaultStoredInstrument = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(filteredMethods, {
        config: { hasDefaultStoredInstrument: true },
    });
    return methodWithDefaultStoredInstrument || filteredMethods[0];
};
const getFilteredPaymentMethodsWithDefault = ({ checkout, checkoutSettings, getPaymentMethod, methods, paymentProviderCustomer, capabilities, }) => {
    let filteredMethods = (0,_applyPaymentMethodFilters__WEBPACK_IMPORTED_MODULE_4__.applyPaymentMethodFilters)(methods, {
        checkout,
        checkoutSettings,
        getPaymentMethod,
        paymentProviderCustomer,
        capabilities,
    });
    const shouldGroupPaymentMethodsByPrefix = filteredMethods.some((method) => _groupPaymentMethodsByPrefix__WEBPACK_IMPORTED_MODULE_2__.GROUPED_METHOD_ID_PREFIXES.some((prefix) => method.id.startsWith(prefix)));
    if (shouldGroupPaymentMethodsByPrefix &&
        (0,_common_utility__WEBPACK_IMPORTED_MODULE_1__["default"])(checkoutSettings, 'PAYMENTS-5142.payment_method_grouping', false)) {
        filteredMethods = _groupPaymentMethodsByPrefix__WEBPACK_IMPORTED_MODULE_2__.GROUPED_METHOD_ID_PREFIXES.reduce((acc, prefix) => (0,_groupPaymentMethodsByPrefix__WEBPACK_IMPORTED_MODULE_2__.groupPaymentMethodsByPrefix)(acc, prefix), filteredMethods);
    }
    return {
        defaultMethod: selectDefaultMethod(filteredMethods, checkout),
        filteredMethods,
    };
};


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethodFilters/multiShippingFilter.ts"
/*!***********************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethodFilters/multiShippingFilter.ts ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   multiShippingFilter: () => (/* binding */ multiShippingFilter)
/* harmony export */ });
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../paymentMethod */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodId.ts");

const MULTI_SHIPPING_INCOMPATIBLE_METHOD_IDS = [_paymentMethod__WEBPACK_IMPORTED_MODULE_0__["default"].AmazonPay];
const multiShippingFilter = {
    name: 'multiShipping',
    apply(methods, { checkout }) {
        if (!checkout.consignments || checkout.consignments.length <= 1) {
            return methods;
        }
        return methods.filter((method) => !MULTI_SHIPPING_INCOMPATIBLE_METHOD_IDS.includes(method.id));
    },
};


/***/ },

/***/ "./packages/core/src/app/payment/paymentMethodFilters/selectedHostedPaymentFilter.ts"
/*!*******************************************************************************************!*\
  !*** ./packages/core/src/app/payment/paymentMethodFilters/selectedHostedPaymentFilter.ts ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectedHostedPaymentFilter: () => (/* binding */ selectedHostedPaymentFilter)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _paymentMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../paymentMethod */ "./packages/core/src/app/payment/paymentMethod/PaymentMethodProviderType.ts");


const selectedHostedPaymentFilter = {
    name: 'selectedHostedPayment',
    apply(methods, { checkout, getPaymentMethod }) {
        const selectedPayment = checkout.payments
            ? (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(checkout.payments, { providerType: _paymentMethod__WEBPACK_IMPORTED_MODULE_1__["default"].Hosted })
            : undefined;
        if (!selectedPayment) {
            return methods;
        }
        const selectedPaymentMethod = getPaymentMethod(selectedPayment.providerId, selectedPayment.gatewayId);
        return selectedPaymentMethod ? (0,lodash__WEBPACK_IMPORTED_MODULE_0__.compact)([selectedPaymentMethod]) : methods;
    },
};


/***/ },

/***/ "./packages/core/src/app/payment/resolvePaymentMethod.ts"
/*!***************************************************************!*\
  !*** ./packages/core/src/app/payment/resolvePaymentMethod.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ resolvePaymentMethod)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _common_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/resolver */ "./packages/core/src/app/common/resolver/resolveLazyComponent.ts");
/* harmony import */ var _generated_paymentIntegrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generated/paymentIntegrations */ "./packages/core/src/app/generated/paymentIntegrations/index.ts");



function resolvePaymentMethod(query) {
    const { ComponentRegistry } = _generated_paymentIntegrations__WEBPACK_IMPORTED_MODULE_2__, allExports = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_generated_paymentIntegrations__WEBPACK_IMPORTED_MODULE_2__, ["ComponentRegistry"]);
    const components = Object.fromEntries(Object.keys(ComponentRegistry).map((key) => [
        key,
        allExports[key],
    ]));
    return (0,_common_resolver__WEBPACK_IMPORTED_MODULE_1__["default"])(query, components, ComponentRegistry);
}


/***/ },

/***/ "./packages/core/src/app/payment/storeCredit/StoreCreditField.tsx"
/*!************************************************************************!*\
  !*** ./packages/core/src/app/payment/storeCredit/StoreCreditField.tsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withCurrency.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/tooltip/Tooltip.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/CheckboxInput/CheckboxInput.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/tooltip/TooltipTrigger.tsx");






const StoreCreditField = ({ availableStoreCredit, currency, name, onChange = lodash__WEBPACK_IMPORTED_MODULE_0__.noop, usableStoreCredit, isStoreCreditApplied, }) => {
    const { checkoutState: { statuses: { isSubmittingOrder }, }, } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event) => onChange(event.target.checked), [onChange]);
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "redeemable.apply_store_credit_before_action" }),
        ' ',
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__["default"], { placement: "top-start", tooltip: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__["default"], { testId: "payment-store-credit-tooltip" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { data: {
                        storeCredit: currency.toCustomerCurrency(availableStoreCredit),
                    }, id: "redeemable.store_credit_available_text" })) },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", { href: "#", onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_3__["default"])() }, currency.toCustomerCurrency(usableStoreCredit))),
        ' ',
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "redeemable.apply_store_credit_after_action" }))), [availableStoreCredit, currency, usableStoreCredit]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__["default"], { checked: isStoreCreditApplied, disabled: isSubmittingOrder(), id: name, label: labelContent, name: name, onChange: handleChange, value: name }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_5__["default"])(StoreCreditField));


/***/ },

/***/ "./packages/core/src/app/payment/storeCredit/StoreCreditOverlay.tsx"
/*!**************************************************************************!*\
  !*** ./packages/core/src/app/payment/storeCredit/StoreCreditOverlay.tsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");


const StoreCreditOverlay = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "storeCreditOverlay", "data-test": "payment-store-credit-overlay" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "storeCreditOverlay-text" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_1__["default"], { id: "payment.payment_not_required_text" }))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoreCreditOverlay);


/***/ },

/***/ "./packages/core/src/app/payment/withForm.tsx"
/*!****************************************************!*\
  !*** ./packages/core/src/app/payment/withForm.tsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_legacy_hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout/legacy-hoc */ "./packages/legacy-hoc/src/createInjectHoc.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/contexts/FormContext.tsx");


const withForm = (0,_bigcommerce_checkout_legacy_hoc__WEBPACK_IMPORTED_MODULE_0__["default"])(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_1__["default"], { displayNamePrefix: 'WithForm' });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withForm);


/***/ },

/***/ "./packages/core/src/app/payment/withPayment.tsx"
/*!*******************************************************!*\
  !*** ./packages/core/src/app/payment/withPayment.tsx ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_legacy_hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout/legacy-hoc */ "./packages/legacy-hoc/src/createInjectHoc.tsx");
/* harmony import */ var _PaymentContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentContext */ "./packages/core/src/app/payment/PaymentContext.tsx");


const withPayment = (0,_bigcommerce_checkout_legacy_hoc__WEBPACK_IMPORTED_MODULE_0__["default"])(_PaymentContext__WEBPACK_IMPORTED_MODULE_1__["default"], { displayNamePrefix: 'WithPayment' });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withPayment);


/***/ },

/***/ "./packages/core/src/app/termsConditions/TermsConditions.tsx"
/*!*******************************************************************!*\
  !*** ./packages/core/src/app/termsConditions/TermsConditions.tsx ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermsConditions: () => (/* binding */ TermsConditions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TermsConditionsField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TermsConditionsField */ "./packages/core/src/app/termsConditions/TermsConditionsField.tsx");


const TermsConditions = ({ termsConditionsUrl, termsConditionsText = '', }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, termsConditionsUrl ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TermsConditionsField__WEBPACK_IMPORTED_MODULE_1__["default"], { name: "terms", type: _TermsConditionsField__WEBPACK_IMPORTED_MODULE_1__.TermsConditionsType.Link, url: termsConditionsUrl })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TermsConditionsField__WEBPACK_IMPORTED_MODULE_1__["default"], { name: "terms", terms: termsConditionsText, type: _TermsConditionsField__WEBPACK_IMPORTED_MODULE_1__.TermsConditionsType.TextArea }))));


/***/ },

/***/ "./packages/core/src/app/termsConditions/TermsConditionsField.tsx"
/*!************************************************************************!*\
  !*** ./packages/core/src/app/termsConditions/TermsConditionsField.tsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermsConditionsType: () => (/* binding */ TermsConditionsType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/parseAnchor.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedHtml.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/withLanguage.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/ModalLink.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/text/MultiLineText.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/CheckboxFormField/CheckboxFormField.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/TextArea/TextArea.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/FormField/FormField.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Fieldset/Fieldset.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/form/Legend/Legend.tsx");
/* harmony import */ var _bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @bigcommerce/checkout/ui */ "./packages/ui/src/modal/ModalHeader.tsx");




var TermsConditionsType;
(function (TermsConditionsType) {
    TermsConditionsType["Link"] = "link";
    TermsConditionsType["TextArea"] = "textarea";
    TermsConditionsType["Modal"] = "modal";
})(TermsConditionsType || (TermsConditionsType = {}));
const BaseTermsConditionsModalCheckboxField = ({ language, name, terms }) => {
    const translatedLabel = language.translate('terms_and_conditions.agreement_with_link_text', {
        url: '',
    });
    const parsedLabel = (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(translatedLabel);
    const labelContent = parsedLabel ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        parsedLabel[0],
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_5__["default"], { body: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_6__.MultiLineText, null, terms), header: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_12__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "terms_and_conditions.heading" })) }, parsedLabel[1]),
        parsedLabel[2])) : (translatedLabel);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__["default"], { labelContent: labelContent, name: name });
};
const TermsConditionsModalCheckboxField = (0,_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_4__["default"])(BaseTermsConditionsModalCheckboxField);
const TermsConditionsCheckboxField = ({ name, url, }) => {
    const labelContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => url ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { data: { url }, id: "terms_and_conditions.agreement_with_link_text" })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "terms_and_conditions.agreement_text" })), [url]);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_7__["default"], { labelContent: labelContent, name: name });
};
const TermsConditionsTextField = ({ name, terms, }) => {
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({ field }) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_8__["default"], { defaultValue: terms, name: field.name, readOnly: true }), [terms]);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_9__["default"], { input: renderInput, name: `${name}Text` });
};
const TermsConditionsFieldset = (props) => {
    const { type } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_10__["default"], { additionalClassName: "checkout-terms", legend: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_ui__WEBPACK_IMPORTED_MODULE_11__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "terms_and_conditions.terms_and_conditions_heading" })) },
        isTermsConditionsTextArea(props) && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TermsConditionsTextField, Object.assign({}, props)),
        isTermsConditionModal(props) && type === TermsConditionsType.Modal ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TermsConditionsModalCheckboxField, Object.assign({}, props))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TermsConditionsCheckboxField, Object.assign({}, props)))));
};
function isTermsConditionsTextArea(props) {
    return props.type === TermsConditionsType.TextArea;
}
function isTermsConditionModal(props) {
    return props.type === TermsConditionsType.Modal;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(TermsConditionsFieldset));


/***/ },

/***/ "./packages/core/src/app/termsConditions/getTermsConditionsValidationSchema.ts"
/*!*************************************************************************************!*\
  !*** ./packages/core/src/app/termsConditions/getTermsConditionsValidationSchema.ts ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTermsConditionsValidationSchema)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");

function getTermsConditionsValidationSchema({ isTermsConditionsRequired, language, }) {
    const schemaFields = {};
    if (isTermsConditionsRequired) {
        schemaFields.terms = (0,yup__WEBPACK_IMPORTED_MODULE_0__.boolean)().oneOf([true], language.translate('terms_and_conditions.agreement_required_error'));
    }
    return (0,yup__WEBPACK_IMPORTED_MODULE_0__.object)(schemaFields);
}


/***/ },

/***/ "./packages/dom-utils/src/parseAnchor.ts"
/*!***********************************************!*\
  !*** ./packages/dom-utils/src/parseAnchor.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseAnchor)
/* harmony export */ });
function parseAnchor(text) {
    const div = document.createElement('div');
    div.innerHTML = text;
    const anchor = div.querySelector('a');
    if (!anchor) {
        return [];
    }
    const anchorSiblings = div.innerHTML.split(anchor.outerHTML);
    return [anchorSiblings[0], anchor.text, anchorSiblings[1]];
}


/***/ },

/***/ "./packages/paypal-utils/src/BraintreePaypalCreditBanner.tsx"
/*!*******************************************************************!*\
  !*** ./packages/paypal-utils/src/BraintreePaypalCreditBanner.tsx ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/braintree */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/braintree.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");



const BraintreePaypalCreditBanner = ({ methodId, containerId, onUnhandledError, }) => {
    const { checkoutService } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        try {
            void checkoutService.initializePayment({
                methodId,
                integrations: [_bigcommerce_checkout_sdk_integrations_braintree__WEBPACK_IMPORTED_MODULE_0__.createBraintreePaypalPaymentStrategy],
                braintree: {
                    bannerContainerId: containerId,
                },
            });
            void checkoutService.deinitializePayment({
                methodId,
            });
        }
        catch (error) {
            if (error instanceof Error) {
                onUnhandledError === null || onUnhandledError === void 0 ? void 0 : onUnhandledError(error);
            }
        }
        return () => {
            try {
                void checkoutService.deinitializePayment({
                    methodId,
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    onUnhandledError === null || onUnhandledError === void 0 ? void 0 : onUnhandledError(error);
                }
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-test": containerId, id: containerId });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BraintreePaypalCreditBanner);


/***/ },

/***/ "./packages/paypal-utils/src/PaypalCommerceCreditBanner.tsx"
/*!******************************************************************!*\
  !*** ./packages/paypal-utils/src/PaypalCommerceCreditBanner.tsx ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_sdk_integrations_paypal_commerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout-sdk/integrations/paypal-commerce */ "./node_modules/@bigcommerce/checkout-sdk/dist/esm/integrations/paypal-commerce.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/contexts */ "./packages/contexts/src/checkout/useCheckout.tsx");



const PaypalCommerceCreditBanner = ({ methodId, containerId, onUnhandledError }) => {
    const { checkoutService } = (0,_bigcommerce_checkout_contexts__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        try {
            void checkoutService.initializePayment({
                methodId,
                integrations: [
                    _bigcommerce_checkout_sdk_integrations_paypal_commerce__WEBPACK_IMPORTED_MODULE_0__.createPayPalCommerceCreditPaymentStrategy,
                    _bigcommerce_checkout_sdk_integrations_paypal_commerce__WEBPACK_IMPORTED_MODULE_0__.createPayPalCommercePaymentStrategy,
                ],
                [methodId]: {
                    bannerContainerId: containerId,
                },
            });
            void checkoutService.deinitializePayment({
                methodId,
            });
        }
        catch (error) {
            if (error instanceof Error) {
                onUnhandledError === null || onUnhandledError === void 0 ? void 0 : onUnhandledError(error);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-test": containerId, id: containerId });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaypalCommerceCreditBanner);


/***/ },

/***/ "./packages/stripe-utils/src/stripeMethodsFiltering.ts"
/*!*************************************************************!*\
  !*** ./packages/stripe-utils/src/stripeMethodsFiltering.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/checkout/payment-integration-api */ "./packages/payment-integration-api/src/PaymentMethodId.ts");

const stripeMethodsFiltering = {
    name: 'stripeMethodsFiltering',
    apply(methods, { paymentProviderCustomer }) {
        let filteredMethods = methods;
        // INFO: filtering payment methods after Stripe Link Auth
        if (paymentProviderCustomer === null || paymentProviderCustomer === void 0 ? void 0 : paymentProviderCustomer.stripeLinkAuthenticationState) {
            const stripePaymentMethod = filteredMethods.filter((method) => method.id === 'card' && method.gateway === _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_0__["default"].StripeUPE);
            filteredMethods = stripePaymentMethod.length ? stripePaymentMethod : filteredMethods;
        }
        // INFO: filtering payment methods after Stripe Adaptive Pricing currency switch
        if (paymentProviderCustomer === null || paymentProviderCustomer === void 0 ? void 0 : paymentProviderCustomer.isCustomerCurrencySelected) {
            const stripePaymentMethod = filteredMethods.filter((method) => method.id === 'checkout_session' &&
                method.gateway === _bigcommerce_checkout_payment_integration_api__WEBPACK_IMPORTED_MODULE_0__["default"].StripeOCS);
            filteredMethods = stripePaymentMethod.length ? stripePaymentMethod : filteredMethods;
        }
        return filteredMethods;
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stripeMethodsFiltering);


/***/ },

/***/ "./packages/ui/src/icon/CreditCardIcon.tsx"
/*!*************************************************!*\
  !*** ./packages/ui/src/icon/CreditCardIcon.tsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mapFromPaymentMethodCardType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapFromPaymentMethodCardType */ "./packages/ui/src/icon/mapFromPaymentMethodCardType.ts");
/* harmony import */ var _IconContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IconContainer */ "./packages/ui/src/icon/IconContainer.tsx");



const CreditCardIcon = ({ cardType }) => {
    const iconProps = {
        additionalClassName: 'cardIcon-icon',
        size: _IconContainer__WEBPACK_IMPORTED_MODULE_2__.IconSize.Medium,
        testId: `credit-card-icon-${cardType || 'default'}`,
    };
    const IconComponent = (0,_mapFromPaymentMethodCardType__WEBPACK_IMPORTED_MODULE_1__.getPaymentMethodIconComponent)(cardType);
    return IconComponent ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconComponent, Object.assign({}, iconProps)))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cardIcon-icon cardIcon-icon--default icon icon--medium" }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(CreditCardIcon));


/***/ },

/***/ "./packages/ui/src/icon/CreditCardIconList.tsx"
/*!*****************************************************!*\
  !*** ./packages/ui/src/icon/CreditCardIconList.tsx ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ "./packages/ui/src/icon/CreditCardIcon.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./packages/ui/src/icon/mapFromPaymentMethodCardType.ts");



const CreditCardIconList = ({ selectedCardType, cardTypes, }) => {
    const filteredCardTypes = (0,___WEBPACK_IMPORTED_MODULE_3__.filterInstrumentTypes)(cardTypes);
    if (!filteredCardTypes.length) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", { className: "creditCardTypes-list" }, filteredCardTypes.map((type) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('creditCardTypes-list-item', { 'is-active': selectedCardType === type }, { 'not-active': selectedCardType && selectedCardType !== type }), "data-test": `${type}-icon`, key: type },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "cardIcon" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(___WEBPACK_IMPORTED_MODULE_2__["default"], { cardType: type })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(CreditCardIconList));


/***/ },

/***/ "./packages/ui/src/icon/mapFromPaymentMethodCardType.ts"
/*!**************************************************************!*\
  !*** ./packages/ui/src/icon/mapFromPaymentMethodCardType.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mapFromPaymentMethodCardType),
/* harmony export */   filterInstrumentTypes: () => (/* binding */ filterInstrumentTypes),
/* harmony export */   getPaymentMethodIconComponent: () => (/* binding */ getPaymentMethodIconComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const instrumentTypeMap = {
    AMEX: {
        instrument: 'american-express',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-amex */ "icon-card-amex").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardAmex */ "./packages/ui/src/icon/IconCardAmex.tsx"))),
    },
    BITCOIN: {
        instrument: 'bitcoin',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-bitcoin */ "icon-bitcoin").then(__webpack_require__.bind(__webpack_require__, /*! ./IconBitCoin */ "./packages/ui/src/icon/IconBitCoin.tsx"))),
    },
    BITCOIN_CASH: {
        instrument: 'bitcoin-cash',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-bitcoin-cash */ "icon-bitcoin-cash").then(__webpack_require__.bind(__webpack_require__, /*! ./IconBitCoinCash */ "./packages/ui/src/icon/IconBitCoinCash.tsx"))),
    },
    BANCONTACT: {
        instrument: 'bancontact',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-bancontact */ "icon-card-bancontact").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardBancontact */ "./packages/ui/src/icon/IconCardBancontact.tsx"))),
    },
    CARNET: {
        instrument: 'carnet',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-carnet */ "icon-card-carnet").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardCarnet */ "./packages/ui/src/icon/IconCardCarnet.tsx"))),
    },
    CB: {
        instrument: 'cb',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-cb */ "icon-card-cb").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardCB */ "./packages/ui/src/icon/IconCardCB.tsx"))),
    },
    DINERS: {
        instrument: 'diners-club',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-diners-club */ "icon-card-diners-club").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardDinersClub */ "./packages/ui/src/icon/IconCardDinersClub.tsx"))),
    },
    DANKORT: {
        instrument: 'dankort',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-dankort */ "icon-card-dankort").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardDankort */ "./packages/ui/src/icon/IconCardDankort.tsx"))),
    },
    DISCOVER: {
        instrument: 'discover',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-discover */ "icon-card-discover").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardDiscover */ "./packages/ui/src/icon/IconCardDiscover.tsx"))),
    },
    DOGECOIN: {
        instrument: 'dogecoin',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-dogecoin */ "icon-dogecoin").then(__webpack_require__.bind(__webpack_require__, /*! ./IconDogeCoin */ "./packages/ui/src/icon/IconDogeCoin.tsx"))),
    },
    ELECTRON: {
        instrument: 'electron',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-electron */ "icon-card-electron").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardElectron */ "./packages/ui/src/icon/IconCardElectron.tsx"))),
    },
    ELO: {
        instrument: 'elo',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-elo */ "icon-card-elo").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardElo */ "./packages/ui/src/icon/IconCardElo.tsx"))),
    },
    ETHEREUM: {
        instrument: 'ethereum',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-ethereum */ "icon-ethereum").then(__webpack_require__.bind(__webpack_require__, /*! ./IconEthereum */ "./packages/ui/src/icon/IconEthereum.tsx"))),
    },
    HIPER: {
        instrument: 'hiper',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-hipercard */ "icon-card-hipercard").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardHipercard */ "./packages/ui/src/icon/IconCardHipercard.tsx"))),
    },
    JCB: {
        instrument: 'jcb',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-jcb */ "icon-card-jcb").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardJCB */ "./packages/ui/src/icon/IconCardJCB.tsx"))),
    },
    LITECOIN: {
        instrument: 'litecoin',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-litecoin */ "icon-litecoin").then(__webpack_require__.bind(__webpack_require__, /*! ./IconLiteCoin */ "./packages/ui/src/icon/IconLiteCoin.tsx"))),
    },
    MADA: {
        instrument: 'mada',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-mada */ "icon-card-mada").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardMada */ "./packages/ui/src/icon/IconCardMada.tsx"))),
    },
    MAESTRO: {
        instrument: 'maestro',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-maestro */ "icon-card-maestro").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardMaestro */ "./packages/ui/src/icon/IconCardMaestro.tsx"))),
    },
    MC: {
        instrument: 'mastercard',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-mastercard */ "icon-card-mastercard").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardMastercard */ "./packages/ui/src/icon/IconCardMastercard.tsx"))),
    },
    SHIBA_INU: {
        instrument: 'shiba-inu',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-shiba-inu */ "icon-shiba-inu").then(__webpack_require__.bind(__webpack_require__, /*! ./IconShibaInu */ "./packages/ui/src/icon/IconShibaInu.tsx"))),
    },
    TROY: {
        instrument: 'troy',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-troy */ "icon-card-troy").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardTroy */ "./packages/ui/src/icon/IconCardTroy.tsx"))),
    },
    CUP: {
        instrument: 'unionpay',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-unionpay */ "icon-card-unionpay").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardUnionPay */ "./packages/ui/src/icon/IconCardUnionPay.tsx"))),
    },
    USD_COIN: {
        instrument: 'usd-coin',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-usd-coin */ "icon-usd-coin").then(__webpack_require__.bind(__webpack_require__, /*! ./IconUsdCoin */ "./packages/ui/src/icon/IconUsdCoin.tsx"))),
    },
    VISA: {
        instrument: 'visa',
        component: (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() | icon-card-visa */ "icon-card-visa").then(__webpack_require__.bind(__webpack_require__, /*! ./IconCardVisa */ "./packages/ui/src/icon/IconCardVisa.tsx"))),
    },
};
function mapFromPaymentMethodCardType(type) {
    var _a;
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return ((_a = instrumentTypeMap[type]) === null || _a === void 0 ? void 0 : _a.instrument) || undefined;
}
function getPaymentMethodIconComponent(type) {
    if (!type) {
        return undefined;
    }
    const instrumentType = Object.values(instrumentTypeMap).find((record) => record.instrument === type);
    return instrumentType ? instrumentType.component : undefined;
}
function getSupportedInstrumentTypes() {
    return Object.values(instrumentTypeMap).map((record) => record.instrument);
}
function filterInstrumentTypes(instrumentTypes) {
    const supportedInstrumentTypes = getSupportedInstrumentTypes();
    return instrumentTypes.filter((type) => supportedInstrumentTypes.includes(type));
}


/***/ },

/***/ "./packages/ui/src/modal/ModalLink.tsx"
/*!*********************************************!*\
  !*** ./packages/ui/src/modal/ModalLink.tsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout/dom-utils */ "./packages/dom-utils/src/preventDefault.ts");
/* harmony import */ var _bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/checkout/locale */ "./packages/locale/src/TranslatedString.tsx");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button */ "./packages/ui/src/button/Button.tsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ "./packages/ui/src/modal/Modal.tsx");
/* harmony import */ var _ModalLink_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ModalLink.scss */ "./packages/ui/src/modal/ModalLink.scss");
/* harmony import */ var _ModalLink_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ModalLink_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ModalTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ModalTrigger */ "./packages/ui/src/modal/ModalTrigger.tsx");







const ModalLink = ({ children, body, header }) => {
    const renderModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((props) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props, { additionalBodyClassName: "modal--withText", footer: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_button__WEBPACK_IMPORTED_MODULE_3__["default"], { onClick: props.onRequestClose, size: _button__WEBPACK_IMPORTED_MODULE_3__.ButtonSize.Small },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bigcommerce_checkout_locale__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "common.ok_action" })), header: header, shouldShowCloseButton: true }), body)), [header, body]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ModalTrigger__WEBPACK_IMPORTED_MODULE_6__["default"], { modal: renderModal }, 
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    ({ onClick }) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { onClick: (0,_bigcommerce_checkout_dom_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(onClick) }, children)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalLink);


/***/ },

/***/ "./packages/ui/src/modal/ModalTrigger.tsx"
/*!************************************************!*\
  !*** ./packages/ui/src/modal/ModalTrigger.tsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ModalTrigger = ({ children, modal }) => {
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const canHandleEventRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        canHandleEventRef.current = true;
        return () => {
            canHandleEventRef.current = false;
        };
    }, []);
    const handleOpen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        if (!canHandleEventRef.current) {
            return;
        }
        setIsOpen(true);
    }, []);
    const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        if (!canHandleEventRef.current) {
            return;
        }
        setIsOpen(false);
    }, []);
    const handleKeyOpen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((keyboardEvent) => {
        if (keyboardEvent.key === 'Enter') {
            handleOpen();
        }
    }, [handleOpen]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        children({
            onClick: handleOpen,
            onKeyPress: handleKeyOpen,
        }),
        modal({
            isOpen,
            onRequestClose: handleClose,
        })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalTrigger);


/***/ },

/***/ "./packages/ui/src/text/MultiLineText.tsx"
/*!************************************************!*\
  !*** ./packages/ui/src/text/MultiLineText.tsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiLineText: () => (/* binding */ MultiLineText)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const MultiLineText = ({ children }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, children.split('\n').map((line, key) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: key },
    line,
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null))))));


/***/ }

}]);
//# sourceMappingURL=payment.js.map