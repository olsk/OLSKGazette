const mod = {

	OLSKControllerRoutes  () {
		return [{
			OLSKRoutePath: '/',
			OLSKRouteMethod: 'get',
			OLSKRouteSignature: 'ROCOBulletinStubRoute',
			OLSKRouteFunction (req, res, next) {
				return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'main'), Object.fromEntries((new URLSearchParams(req.query)).entries()));
			},
			OLSKRouteLanguageCodes: ['en', 'fr', 'es', 'pt', 'de'],
		}];
	},

};

Object.assign(exports, mod)
