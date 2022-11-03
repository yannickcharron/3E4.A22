import express from 'express';
import paginate from 'express-paginate';
import HttpError from 'http-errors';

import explorationRepository from '../repositories/explorations.repository.js';

const router = express.Router(); 

class ExplorationsRoutes {
    
    constructor() {
        router.get('/', paginate.middleware(25,50), this.getAll);
        router.get('/:explorationId', this.getOne);
    }

    async getAll(req, res, next) {
        try {
 
            const retrieveOptions = {
                limit:req.query.limit,
                skip: req.skip
            }

            let explorations = await explorationRepository.retrieve(retrieveOptions);

            explorations = explorations.map(e => {
                e = e.toObject({getters: false, virtuals:false});
                e = explorationRepository.transform(e);

                return e;
            });

            const payload = {
                _metadata: {
                    hasNextPage: true,
                    page: req.query.page,
                    limit: req.query.limit,
                    skip: req.skip,
                    totalPages: 0,
                    totalDocuments: 0
                },
                _links: {
                    prev:'',
                    self:'',
                    next:''

                },
                data: explorations
            }

            res.status(200).json(payload);
        } catch(err) {
            return next(err);
        }
    }

    getOne(req, res, next) {

    }

}

new ExplorationsRoutes();

export default router;