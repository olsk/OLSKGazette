const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	ROCOBulletin: '.ROCOBulletin',
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

});
