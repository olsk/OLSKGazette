const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('ROCOBulletin_Misc', function () {

	const ROCOBulletinProject = uRandomElement(undefined, Math.random().toString());

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			ROCOBulletinProject,
		});
	});

	describe('ROCOBulletin', function test_ROCOBulletin () {

		it('classes OLSKDecorBigForm', function () {
			browser.assert.hasClass(ROCOBulletin, 'OLSKDecorBigForm');
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

		it('sets data-members-form', function () {
			browser.assert.attribute(ROCOBulletin, 'data-members-form', '');
		});

	});

	describe('ROCOBulletinAddressField', function test_ROCOBulletinAddressField () {

		it('sets name', function () {
			browser.assert.attribute(ROCOBulletinAddressField, 'name', 'email');
		});

		it('sets type', function () {
			browser.assert.attribute(ROCOBulletinAddressField, 'type', 'email');
		});

		it('sets required', function () {
			browser.assert.attribute(ROCOBulletinAddressField, 'required', 'true');
		});

		it('sets placeholder', function () {
			browser.assert.attribute(ROCOBulletinAddressField, 'placeholder', 'you@example.com');
		});

		it('sets data-members-email', function () {
			browser.assert.attribute(ROCOBulletinAddressField, 'data-members-email', '');
		});

	});

	describe('ROCOBulletinProjectField', function test_ROCOBulletinProjectField () {

		it('sets name', function () {
			browser.assert.attribute(ROCOBulletinProjectField, 'name', 'labels');
		});

		it('sets type', function () {
			browser.assert.attribute(ROCOBulletinProjectField, 'type', 'hidden');
		});

		it('sets data-members-label', function () {
			browser.assert.attribute(ROCOBulletinProjectField, 'data-members-label', '');
		});

		it('sets value', function () {
			browser.assert.attribute(ROCOBulletinProjectField, 'value', ROCOBulletinProject || 'RP_X');
		});
		
	});

	describe('ROCOBulletinProjectFieldButtondown', function test_ROCOBulletinProjectFieldButtondown () {

		it('sets name', function () {
			browser.assert.attribute(ROCOBulletinProjectFieldButtondown, 'name', 'tag');
		});

		it('sets type', function () {
			browser.assert.attribute(ROCOBulletinProjectFieldButtondown, 'type', 'hidden');
		});

		it('sets value', function () {
			browser.assert.attribute(ROCOBulletinProjectFieldButtondown, 'value', ROCOBulletinProject || 'RP_X');
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
