const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	ROCOBulletin: '.ROCOBulletin',

	ROCOBulletin: '.ROCOBulletin',
	ROCOBulletinAddressField: '.ROCOBulletinAddressField',
	ROCOBulletinProjectFieldGhost: '.ROCOBulletinProjectFieldGhost',
	ROCOBulletinProjectFieldButtondown: '.ROCOBulletinProjectFieldButtondown',
	ROCOBulletinSubmitButton: '.ROCOBulletinSubmitButton',

	ROCOBulletinFeedback: '.ROCOBulletinFeedback',
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

	it('shows ROCOBulletin', function () {
		browser.assert.elements(ROCOBulletin, 1);
	});

	it('shows ROCOBulletinAddressField', function () {
		browser.assert.elements(ROCOBulletinAddressField, 1);
	});

	it('shows ROCOBulletinProjectFieldGhost', function () {
		browser.assert.elements(ROCOBulletinProjectFieldGhost, 1);
	});

	it('shows ROCOBulletinProjectFieldButtondown', function () {
		browser.assert.elements(ROCOBulletinProjectFieldButtondown, 1);
	});

	it('shows ROCOBulletinSubmitButton', function () {
		browser.assert.elements(ROCOBulletinSubmitButton, 1);
	});

	it('shows ROCOBulletinFeedback', function () {
		browser.assert.elements(ROCOBulletinFeedback, 1);
	});

});
