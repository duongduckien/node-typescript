"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routes {
    static init(app, router) {
        app.use('/', router);
        router.get('/test', (req, res) => {
            return res.status(200).json({
                message: 'Test api',
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=index.js.map