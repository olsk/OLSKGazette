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

		it('localizes ROCOBulletin2', function() {
			browser.assert.text(ROCOBulletin2, uLocalized('ROCOBulletinSubmitButtonText'));
		});

		it('localizes ROCOBulletinSubmitButton', function() {
			browser.assert.attribute(ROCOBulletinSubmitButton, 'value', uLocalized('ROCOBulletinSubmitButtonText'));
		});

	});

});
