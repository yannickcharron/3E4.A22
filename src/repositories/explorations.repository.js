import Exploration from '../models/exploration.model.js';

class ExplorationsRepository {
    
    retrieveAll() {
        return Exploration.find();
    }

    retrieve(retrieveOptions) {
        const retrieveQuery = Exploration.find()
                                .limit(retrieveOptions.limit)
                                .skip(retrieveOptions.skip);

        return Promise.all([ retrieveQuery, Exploration.countDocuments() ]);
    }

    transform(exploration) {
        

        exploration.href = `${process.env.BASE_URL}/explorations/${exploration._id}`;
        delete exploration._id;
        return exploration;
    }


}

export default new ExplorationsRepository();