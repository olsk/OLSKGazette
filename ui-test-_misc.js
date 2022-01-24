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

	describe('ROCOBulletinHybrid', function test_ROCOBulletinHybrid () {

		it('classes OLSKDecorBigForm', function () {
			browser.assert.hasClass(ROCOBulletinHybrid, 'OLSKDecorBigForm');
		});

		it('sets method', function () {
			browser.assert.attribute(ROCOBulletinHybrid, 'method', 'post');
		});

		it('sets action', function () {
			browser.assert.attribute(ROCOBulletinHybrid, 'action', 'https://buttondown.email/api/emails/embed-subscribe/rosano');
		});

		it('sets target', function () {
			browser.assert.attribute(ROCOBulletinHybrid, 'target', '_blank');
		});

		it('sets data-members-form', function () {
			browser.assert.attribute(ROCOBulletinHybrid, 'data-members-form', '');
		});

	});

	describe('ROCOBulletinHybridAddressField', function test_ROCOBulletinHybridAddressField () {

		it('sets name', function () {
			browser.assert.attribute(ROCOBulletinHybridAddressField, 'name', 'email');
		});

		it('sets type', function () {
			browser.assert.attribute(ROCOBulletinHybridAddressField, 'type', 'email');
		});

		it('sets required', function () {
			browser.assert.attribute(ROCOBulletinHybridAddressField, 'required', 'true');
		});

		it('sets placeholder', function () {
			browser.assert.attribute(ROCOBulletinHybridAddressField, 'placeholder', 'you@example.com');
		});

		it('sets data-members-email', function () {
			browser.assert.attribute(ROCOBulletinHybridAddressField, 'data-members-email', '');
		});

	});

	describe('ROCOBulletinHybridProjectFieldGhost', function test_ROCOBulletinHybridProjectFieldGhost () {

		it('sets name', function () {
			browser.assert.attribute(ROCOBulletinHybridProjectFieldGhost, 'name', 'labels');
		});

		it('sets type', function () {
			browser.assert.attribute(ROCOBulletinHybridProjectFieldGhost, 'type', 'hidden');
		});

		it('sets data-members-label', function () {
			browser.assert.attribute(ROCOBulletinHybridProjectFieldGhost, 'data-members-label', '');
		});

		it('sets value', function () {
			browser.assert.attribute(ROCOBulletinHybridProjectFieldGhost, 'value', ROCOBulletinProject || 'RP_X');
		});
		
	});

	describe('ROCOBulletinHybridProjectFieldButtondown', function test_ROCOBulletinHybridProjectFieldButtondown () {

		it('sets name', function () {
			browser.assert.attribute(ROCOBulletinHybridProjectFieldButtondown, 'name', 'tag');
		});

		it('sets type', function () {
			browser.assert.attribute(ROCOBulletinHybridProjectFieldButtondown, 'type', 'hidden');
		});

		it('sets value', function () {
			browser.assert.attribute(ROCOBulletinHybridProjectFieldButtondown, 'value', ROCOBulletinProject || 'RP_X');
		});
		
	});

	describe('ROCOBulletinHybridSubmitButton', function test_ROCOBulletinHybridSubmitButton () {

		it('sets type', function () {
			browser.assert.attribute(ROCOBulletinHybridSubmitButton, 'type', 'submit');
		});

		it('classes OLSKDecorPressCall', function () {
			browser.assert.hasClass(ROCOBulletinHybridSubmitButton, 'OLSKDecorPressCall');
		});

	});

});
