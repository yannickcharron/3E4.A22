import Exploration from '../models/exploration.model.js';

class ExplorationsRepository {
    
    retrieveAll() {
        return Exploration.find();
    }

    retrieve(retrieveOptions) {
        const retrieveQuery = Exploration.find()
                                .limit(retrieveOptions.limit)
                                .skip(retrieveOptions.skip);

        return [retrieveQuery, Exploration.countDocuments() ];
    }

    transform(e) {
        //TODO: Reviens ici le grand
        return e;
    }


}

export default new ExplorationsRepository();