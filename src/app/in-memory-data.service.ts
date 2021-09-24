import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './shared/models/Hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 11,
        name: 'Dr Nice',
        power: 'Fire',
        birthday: new Date(1988, 3, 15),
      },
      { id: 12, name: 'Narco', power: 'Ice', birthday: new Date(1988, 3, 15) },
      {
        id: 13,
        name: 'Bombasto',
        power: 'Electricity',
        birthday: new Date(1988, 3, 15),
      },
      {
        id: 14,
        name: 'Celeritas',
        power: 'Fire',
        birthday: new Date(1988, 3, 15),
      },
      {
        id: 15,
        name: 'Magneta',
        power: 'Ice',
        birthday: new Date(1988, 3, 15),
      },
      {
        id: 16,
        name: 'RubberMan',
        power: 'Electricity',
        birthday: new Date(1988, 3, 15),
      },
      {
        id: 17,
        name: 'Dynama',
        power: 'Electricity',
        birthday: new Date(1988, 3, 15),
      },
      { id: 18, name: 'Dr IQ', power: 'Fire', birthday: new Date(1988, 3, 15) },
      { id: 19, name: 'Magma', power: 'Ice', birthday: new Date(1988, 3, 15) },
      {
        id: 20,
        name: 'Tornado',
        power: 'Fire',
        birthday: new Date(1988, 3, 15),
      },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
