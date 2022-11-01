import express from 'express';
import HttpError from 'http-errors';

import explorationRepository from '../repositories/explorations.repository.js';

const router = express.Router(); 

class ExplorationsRoutes {
    
    constructor() {
        router.get('/', this.getAll);
        router.get('/:explorationId', this.getOne);
    }

    getAll(req, res, next) {

    }

    getOne(req, res, next) {

    }

}

new ExplorationsRoutes();

export default router;