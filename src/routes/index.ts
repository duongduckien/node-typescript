import express from 'express';

export class Routes {

    static init(app: express.Application, router: express.Router) {
        
        app.use('/', router);

    }

}
