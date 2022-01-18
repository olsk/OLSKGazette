const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	ROCOBulletin2: '.ROCOBulletin2',

	ROCOBulletin: '.ROCOBulletin',

	ROCOBulletinAddressField: '.ROCOBulletinAddressField',

	ROCOBulletinProjectField: '.ROCOBulletinProjectField',

	ROCOBulletinSubmitButton: '.ROCOBulletinSubmitButton',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('ROCOBulletin_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows ROCOBulletin2', function () {
		browser.assert.elements(ROCOBulletin2, 1);
	});

	it('shows ROCOBulletin', function () {
		browser.assert.elements(ROCOBulletin, 1);
	});

	it('shows ROCOBulletinAddressField', function () {
		browser.assert.elements(ROCOBulletinAddressField, 1);
	});

	it('shows ROCOBulletinProjectField', function () {
		browser.assert.elements(ROCOBulletinProjectField, 1);
	});

	it('shows ROCOBulletinSubmitButton', function () {
		browser.assert.elements(ROCOBulletinSubmitButton, 1);
	});

});
