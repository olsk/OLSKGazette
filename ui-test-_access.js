const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKGazette: '.OLSKGazette',

	OLSKGazetteAddressField: '.OLSKGazetteAddressField',

	OLSKGazetteProjectField: '.OLSKGazetteProjectField',

	OLSKGazetteSubmitButton: '.OLSKGazetteSubmitButton',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKGazette_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows OLSKGazette', function () {
		browser.assert.elements(OLSKGazette, 1);
	});

	it('shows OLSKGazetteAddressField', function () {
		browser.assert.elements(OLSKGazetteAddressField, 1);
	});

	it('shows OLSKGazetteProjectField', function () {
		browser.assert.elements(OLSKGazetteProjectField, 1);
	});

	it('shows OLSKGazetteSubmitButton', function () {
		browser.assert.elements(OLSKGazetteSubmitButton, 1);
	});

});
