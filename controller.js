const mod = {

	OLSKControllerRoutes  () {
		return [{
			OLSKRoutePath: '/',
			OLSKRouteMethod: 'get',
			OLSKRouteSignature: 'ROCOBulletinStubRoute',
			OLSKRouteFunction (req, res, next) {
				return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'main'), Object.fromEntries(Array.from((new URLSearchParams(req.query)).entries()).filter(function ([key, value]) {
					return value !== 'undefined';
				})), function (err, data) {
					return res.send(data.replace(/noscript/g, 'test-noscript').split('<script defer src="https://unpkg.com/@tryghost/portal@1.12.7/umd/portal.min.js" data-ghost="https://list.rosano.ca"></script>').join(''));
				});
			},
			OLSKRouteLanguageCodes: ['en', 'fr', 'es', 'pt'],
		}];
	},

};

Object.assign(exports, mod)
