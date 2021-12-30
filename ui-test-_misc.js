const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('ROCOBulletin_Misc', function () {

	const ROCOBulletinProject = uRandomElement(undefined, Math.random().toString());

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			ROCOBulletinProject,
		});
	});

	it('sets method', function () {
		browser.assert.attribute(ROCOBulletin, 'method', 'post');
	});

	it('sets action', function () {
		browser.assert.attribute(ROCOBulletin, 'action', 'https://buttondown.email/api/emails/embed-subscribe/rosano');
	});

	it('sets target', function () {
		browser.assert.attribute(ROCOBulletin, 'target', '_blank');
	});

	it('classes OLSKDecorBigForm', function () {
		browser.assert.hasClass(ROCOBulletin, 'OLSKDecorBigForm');
	});

	describe('ROCOBulletin2', function test_ROCOBulletin2 () {

		it('classes OLSKDecorPress', function () {
			browser.assert.hasClass(ROCOBulletin2, 'OLSKDecorPress');
		});

		it('classes OLSKDecorPressCall', function () {
			browser.assert.hasClass(ROCOBulletin2, 'OLSKDecorPressCall');
		});

		it('classes OLSKDecorInput', function () {
			browser.assert.hasClass(ROCOBulletin2, 'OLSKDecorInput');
		});

		it('sets href', function () {
			browser.assert.attribute(ROCOBulletin2, 'href', 'https://rosano.ca/ephemerata');
		});
		
	});

	describe('ROCOBulletinAddressField', function test_ROCOBulletinAddressField () {

		it('sets type', function () {
			browser.assert.attribute(ROCOBulletinAddressField, 'type', 'email');
		});

		it('sets name', function () {
			browser.assert.attribute(ROCOBulletinAddressField, 'name', 'email');
		});

		it('sets placeholder', function () {
			browser.assert.attribute(ROCOBulletinAddressField, 'placeholder', 'you@example.com');
		});
		
	});

	describe('ROCOBulletinProjectField', function test_ROCOBulletinProjectField () {

		it('sets type', function () {
			browser.assert.attribute(ROCOBulletinProjectField, 'type', 'hidden');
		});

		it('sets name', function () {
			browser.assert.attribute(ROCOBulletinProjectField, 'name', 'tag');
		});

		it('sets value', function () {
			browser.assert.attribute(ROCOBulletinProjectField, 'value', ROCOBulletinProject || 'RP_X');
		});
		
	});

	describe('ROCOBulletinSubmitButton', function test_ROCOBulletinSubmitButton () {

		it('sets type', function () {
			browser.assert.attribute(ROCOBulletinSubmitButton, 'type', 'submit');
		});

		it('classes OLSKDecorPressCall', function () {
			browser.assert.hasClass(ROCOBulletinSubmitButton, 'OLSKDecorPressCall');
		});

	});

});
