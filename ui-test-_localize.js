const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe('OLSKGazette_Localize-' + OLSKRoutingLanguage, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
			});
		});

		it('localizes OLSKGazetteHeading', function() {
			browser.assert.text('#TestHeading', uLocalized('OLSKGazetteHeadingText'));
		});
	
		it('localizes OLSKGazetteSubmitButton', function() {
			browser.assert.attribute(OLSKGazetteSubmitButton, 'value', uLocalized('OLSKGazetteSubmitButtonText'));
		});

	});

});
