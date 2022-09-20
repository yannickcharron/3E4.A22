import dayjs from 'dayjs';
import planetModel from '../models/planet-model.js';

import Planet from '../models/planet-model.js';

class PlanetsRepository {

    retrieveAll() {
        return Planet.find(); //SELECT * FROM planets
    }

    retrieveOne(idPlanet) {
        return Planet.findById(idPlanet); //SELECT * FROM planets WHERE idPlanet = [idPlanet]
    }

    create(planet) {
        return Planet.create(planet); // INSERT () INTO planets VALUES()
    }


    transform(planet) {

        planet.discoveryDate = dayjs(planet.discoveryDate).format('YYYY-MM-DD');
        
        delete planet.createdAt;
        delete planet.updatedAt;
        delete planet.__v;

        return planet;
    }
}

export default new PlanetsRepository();