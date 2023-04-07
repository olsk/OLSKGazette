const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe('ROCOBulletin_Localize-' + OLSKRoutingLanguage, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
			});
		});

		it('localizes ROCOBulletinSubmitButton', function() {
			return browser.assert.attribute(ROCOBulletinSubmitButton, 'value', uLocalized('ROCOBulletinSubmitButtonText'));
		});

		it('localizes ROCOBulletinFeedback', function() {
			return browser.assert.text(ROCOBulletinFeedback, uLocalized('ROCOBulletinFeedbackText'));
		});

	});

});
