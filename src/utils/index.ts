import { Router, Request, Response, NextFunction } from 'express';
import environment from './env';

type Wrapper = ((router: Router) => void);
const applyMiddleware = (middlewareWrappers: Wrapper[], router: Router) => {
    for (const wrapper of middlewareWrappers) {
        wrapper(router);
    }
};

type Handler = (req: Request, res: Response, next: NextFunction) => Promise<void> | void;
interface IRoute {
    path: string;
    method: string;
    handler: Handler | Handler[];
}

const applyRoutes = (routes: IRoute[], router: Router) => {
    for (const route of routes) {
        const { method, path, handler } = route;
        (router as any)[method](path, handler);
    }
};

const env = environment;

export { applyMiddleware, applyRoutes, env };
