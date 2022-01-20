const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	ROCOBulletin: '.ROCOBulletin',

	ROCOBulletin2: '.ROCOBulletin2',

	ROCOBulletinScript: '.ROCOBulletinScript',
	ROCOBulletinScriptAddressField: '.ROCOBulletinScriptAddressField',
	ROCOBulletinScriptProjectField: '.ROCOBulletinScriptProjectField',
	ROCOBulletinScriptSubmitButton: '.ROCOBulletinScriptSubmitButton',
	ROCOBulletinScriptFeedback: '.ROCOBulletinScriptFeedback',

	ROCOBulletinNoscript: 'test-noscript .ROCOBulletinNoscript',
	ROCOBulletinNoscriptAddressField: '.ROCOBulletinNoscriptAddressField',
	ROCOBulletinNoscriptProjectField: '.ROCOBulletinNoscriptProjectField',
	ROCOBulletinNoscriptSubmitButton: '.ROCOBulletinNoscriptSubmitButton',
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

	it('shows ROCOBulletinScript', function () {
		browser.assert.elements(ROCOBulletinScript, 1);
	});

	it('shows ROCOBulletinScriptAddressField', function () {
		browser.assert.elements(ROCOBulletinScriptAddressField, 1);
	});

	it('shows ROCOBulletinScriptProjectField', function () {
		browser.assert.elements(ROCOBulletinScriptProjectField, 1);
	});

	it('shows ROCOBulletinScriptSubmitButton', function () {
		browser.assert.elements(ROCOBulletinScriptSubmitButton, 1);
	});

	it('shows ROCOBulletinScriptFeedback', function () {
		browser.assert.elements(ROCOBulletinScriptFeedback, 1);
	});

	it('shows ROCOBulletinNoscript', function () {
		browser.assert.elements(ROCOBulletinNoscript, 1);
	});

	it('shows ROCOBulletinNoscriptAddressField', function () {
		browser.assert.elements(ROCOBulletinNoscriptAddressField, 1);
	});

	it('shows ROCOBulletinNoscriptProjectField', function () {
		browser.assert.elements(ROCOBulletinNoscriptProjectField, 1);
	});

	it('shows ROCOBulletinNoscriptSubmitButton', function () {
		browser.assert.elements(ROCOBulletinNoscriptSubmitButton, 1);
	});

});
