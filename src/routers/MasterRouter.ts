import { Router } from 'express';
import TestRouter from './TestRouter';

class MasterRouter {
  private _router = Router();
  private _testRouter = TestRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use('/test', this._testRouter);
  }
}

export = new MasterRouter().router;