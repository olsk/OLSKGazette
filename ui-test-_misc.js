const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('ROCOBulletin_Misc', function () {

	const ROCOBulletinProject = uRandomElement(undefined, Math.random().toString());

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			ROCOBulletinProject,
		});
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

	describe('ROCOBulletinScript', function test_ROCOBulletinScript () {

		it('sets data-members-form', function () {
			browser.assert.attribute(ROCOBulletinScript, 'data-members-form', '');
		});

		it('classes OLSKDecorBigForm', function () {
			browser.assert.hasClass(ROCOBulletinScript, 'OLSKDecorBigForm');
		});
		
	});

	describe('ROCOBulletinScriptAddressField', function test_ROCOBulletinScriptAddressField () {

		it('sets type', function () {
			browser.assert.attribute(ROCOBulletinScriptAddressField, 'type', 'email');
		});

		it('sets required', function () {
			browser.assert.attribute(ROCOBulletinScriptAddressField, 'required', 'true');
		});

		it('sets placeholder', function () {
			browser.assert.attribute(ROCOBulletinScriptAddressField, 'placeholder', 'you@example.com');
		});

		it('sets data-members-email', function () {
			browser.assert.attribute(ROCOBulletinScriptAddressField, 'data-members-email', '');
		});
		
	});

	describe('ROCOBulletinScriptProjectField', function test_ROCOBulletinScriptProjectField () {

		it('sets type', function () {
			browser.assert.attribute(ROCOBulletinScriptProjectField, 'type', 'hidden');
		});

		it('sets data-members-label', function () {
			browser.assert.attribute(ROCOBulletinScriptProjectField, 'data-members-label', '');
		});

		it('sets value', function () {
			browser.assert.attribute(ROCOBulletinScriptProjectField, 'value', ROCOBulletinProject || 'RP_X');
		});
		
	});

	describe('ROCOBulletinScriptSubmitButton', function test_ROCOBulletinScriptSubmitButton () {

		it('sets type', function () {
			browser.assert.attribute(ROCOBulletinScriptSubmitButton, 'type', 'submit');
		});

		it('classes OLSKDecorPressCall', function () {
			browser.assert.hasClass(ROCOBulletinScriptSubmitButton, 'OLSKDecorPressCall');
		});

	});

	describe('ROCOBulletinNoscript', function test_ROCOBulletinNoscript () {

		it('sets method', function () {
			browser.assert.attribute(ROCOBulletinNoscript, 'method', 'post');
		});

		it('sets action', function () {
			browser.assert.attribute(ROCOBulletinNoscript, 'action', 'https://buttondown.email/api/emails/embed-subscribe/rosano');
		});

		it('sets target', function () {
			browser.assert.attribute(ROCOBulletinNoscript, 'target', '_blank');
		});

		it('classes OLSKDecorBigForm', function () {
			browser.assert.hasClass(ROCOBulletinNoscript, 'OLSKDecorBigForm');
		});
		
	});

	describe('ROCOBulletinNoscriptAddressField', function test_ROCOBulletinNoscriptAddressField () {

		it('sets type', function () {
			browser.assert.attribute(ROCOBulletinNoscriptAddressField, 'type', 'email');
		});

		it('sets name', function () {
			browser.assert.attribute(ROCOBulletinNoscriptAddressField, 'name', 'email');
		});

		it('sets placeholder', function () {
			browser.assert.attribute(ROCOBulletinNoscriptAddressField, 'placeholder', 'you@example.com');
		});
		
	});

	describe('ROCOBulletinNoscriptProjectField', function test_ROCOBulletinNoscriptProjectField () {

		it('sets type', function () {
			browser.assert.attribute(ROCOBulletinNoscriptProjectField, 'type', 'hidden');
		});

		it('sets name', function () {
			browser.assert.attribute(ROCOBulletinNoscriptProjectField, 'name', 'tag');
		});

		it('sets value', function () {
			browser.assert.attribute(ROCOBulletinNoscriptProjectField, 'value', ROCOBulletinProject || 'RP_X');
		});
		
	});

	describe('ROCOBulletinNoscriptSubmitButton', function test_ROCOBulletinNoscriptSubmitButton () {

		it('sets type', function () {
			browser.assert.attribute(ROCOBulletinNoscriptSubmitButton, 'type', 'submit');
		});

		it('classes OLSKDecorPressCall', function () {
			browser.assert.hasClass(ROCOBulletinNoscriptSubmitButton, 'OLSKDecorPressCall');
		});

	});

});
