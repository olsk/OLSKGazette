const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	ROCOBulletin: '.ROCOBulletin',

	ROCOBulletin: '.ROCOBulletin',
	ROCOBulletinAddressField: '.ROCOBulletinAddressField',
	ROCOBulletinProjectField: '.ROCOBulletinProjectField',
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
		return browser.assert.elements(ROCOBulletin, 1);
	});

	it('shows ROCOBulletin', function () {
		return browser.assert.elements(ROCOBulletin, 1);
	});

	it('shows ROCOBulletinAddressField', function () {
		return browser.assert.elements(ROCOBulletinAddressField, 1);
	});

	it('shows ROCOBulletinProjectField', function () {
		return browser.assert.elements(ROCOBulletinProjectField, 1);
	});

	it('shows ROCOBulletinProjectFieldButtondown', function () {
		return browser.assert.elements(ROCOBulletinProjectFieldButtondown, 1);
	});

	it('shows ROCOBulletinSubmitButton', function () {
		return browser.assert.elements(ROCOBulletinSubmitButton, 1);
	});

	it('shows ROCOBulletinFeedback', function () {
		return browser.assert.elements(ROCOBulletinFeedback, 1);
	});

});
