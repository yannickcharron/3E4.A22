import Planet from '../models/planet-model.js';

class PlanetsRepository {

    retrieveAll() {
        return Planet.find(); //SELECT * FROM planets
    }
}

export default new PlanetsRepository();