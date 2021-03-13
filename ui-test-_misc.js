const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKGazette_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('sets method', function () {
		browser.assert.attribute(OLSKGazette, 'method', 'post');
	});

	it('sets action', function () {
		browser.assert.attribute(OLSKGazette, 'action', 'https://rosano.us11.list-manage.com/subscribe/post?u=7961db5bac34616b1bbf06ada&id=e58e9bd9be');
	});

	it('sets target', function () {
		browser.assert.attribute(OLSKGazette, 'target', '_blank');
	});

	it('sets novalidate', function () {
		browser.assert.attribute(OLSKGazette, 'novalidate', '');
	});

	it('classes OLSKDecorBigForm', function () {
		browser.assert.hasClass(OLSKGazette, 'OLSKDecorBigForm');
	});

	describe('OLSKGazetteAddressField', function test_OLSKGazetteAddressField () {

		it('sets type', function () {
			browser.assert.attribute(OLSKGazetteAddressField, 'type', 'email');
		});

		it('sets name', function () {
			browser.assert.attribute(OLSKGazetteAddressField, 'name', 'EMAIL');
		});

		it('sets placeholder', function () {
			browser.assert.attribute(OLSKGazetteAddressField, 'placeholder', 'you@example.com');
		});
		
	});

	describe('OLSKGazetteSubmitButton', function test_OLSKGazetteSubmitButton () {

		it('sets type', function () {
			browser.assert.attribute(OLSKGazetteSubmitButton, 'type', 'submit');
		});

		it('classes OLSKDecorPressCall', function () {
			browser.assert.hasClass(OLSKGazetteSubmitButton, 'OLSKDecorPressCall');
		});

	});

});
