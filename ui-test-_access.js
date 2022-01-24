const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	ROCOBulletin: '.ROCOBulletin',

	ROCOBulletin2: '.ROCOBulletin2',

	ROCOBulletinHybrid: '.ROCOBulletinHybrid',
	ROCOBulletinHybridAddressField: '.ROCOBulletinHybridAddressField',
	ROCOBulletinHybridProjectFieldGhost: '.ROCOBulletinHybridProjectFieldGhost',
	ROCOBulletinHybridProjectFieldButtondown: '.ROCOBulletinHybridProjectFieldButtondown',
	ROCOBulletinHybridSubmitButton: '.ROCOBulletinHybridSubmitButton',

	ROCOBulletinHybridFeedback: '.ROCOBulletinHybridFeedback',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('ROCOBulletin_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows ROCOBulletin', function () {
		browser.assert.elements(ROCOBulletin, 1);
	});

	it('shows ROCOBulletin2', function () {
		browser.assert.elements(ROCOBulletin2, 1);
	});

	it('shows ROCOBulletinHybrid', function () {
		browser.assert.elements(ROCOBulletinHybrid, 1);
	});

	it('shows ROCOBulletinHybridAddressField', function () {
		browser.assert.elements(ROCOBulletinHybridAddressField, 1);
	});

	it('shows ROCOBulletinHybridProjectFieldGhost', function () {
		browser.assert.elements(ROCOBulletinHybridProjectFieldGhost, 1);
	});

	it('shows ROCOBulletinHybridProjectFieldButtondown', function () {
		browser.assert.elements(ROCOBulletinHybridProjectFieldButtondown, 1);
	});

	it('shows ROCOBulletinHybridSubmitButton', function () {
		browser.assert.elements(ROCOBulletinHybridSubmitButton, 1);
	});

	it('shows ROCOBulletinHybridFeedback', function () {
		browser.assert.elements(ROCOBulletinHybridFeedback, 1);
	});

});
