import express from 'express';
import HttpError from 'http-errors';

import PLANETS from '../data/planets.js';

import planetsRepository from '../repositories/planets-repository.js';

const router = express.Router();

class PlanetsRoutes {
  // Nous sommes déjà sous le path /planets
  constructor() {
    router.get('/', this.getAll); // /planets
    router.get('/:idPlanet', this.getOne); // /planets/:idPlanet
    router.post('/', this.post); // /planets
    router.delete('/:idPlanet', this.deleteOne);
  }

  deleteOne(req, res, next) {
    const idPlanet = parseInt(req.params.idPlanet, 10);

    const index = PLANETS.findIndex((p) => p.id === idPlanet);
    if (index === -1) {
      return next(HttpError.NotFound(`La planète avec l'identifiant ${idPlanet} n'existe pas`));
    } else {
      PLANETS.splice(index, 1);
      res.status(204).end();
    }
  }

  async getAll(req, res, next) {
    try {
      const planets = await planetsRepository.retrieveAll();
      console.log(planets);
      res.status(200).json(planets);
    } catch(err) {
      return next(err);
    }
  }

  // /planets/400
  getOne(req, res, next) {
    // for(let planet of PLANETS) {
    //     if(planet.id === idPlanet) {
    //         //Trouver la planète recherchée
    //         res.status(200);
    //         res.json(planet);
    //         break;
    //     }
    // }
    // res.status(404);
    // res.end();

    const idPlanet = parseInt(req.params.idPlanet, 10);
    const planet = PLANETS.filter((p) => p.id === idPlanet);
    if (planet.length > 0) {
      res.status(200);
      res.json(planet[0]);
    } else {
      return next(HttpError.NotFound(`La planète avec l'identifiant ${idPlanet} n'existe pas`));
    }
  }

  post(req, res, next) {
    const newPlanet = req.body;

    if (newPlanet) {
      const index = PLANETS.findIndex((p) => p.id === req.body.id);
      if (index === -1) {
        PLANETS.push(newPlanet);
        res.status(201).json(newPlanet);
      } else {
        return next(HttpError.Conflict(`Une planète avec l'identifiant ${newPlanet.id}`));
      }
    } else {
      return next(HttpError.BadRequest('Aucune information transmise'));
    }
  }
}

new PlanetsRoutes();
export default router;
