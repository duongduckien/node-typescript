import express from 'express';

export class Routes {

    static init(app: express.Application, router: express.Router) {
        
        app.use('/', router);

        router.get('/test', (req, res) => {
            return res.status(200).json({
                message: 'Test api',
            });
        });

    }

}
