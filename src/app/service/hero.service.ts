import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  list: Hero[] = [
    {
      id: 1,
      name: 'Magneto',
      superPower: 'Magnetic',
      address: 'Kőbánya alsó',
    },
    {
      id: 2,
      name: 'Doctor Strange',
      superPower: 'Magic',
      address: 'Kőbánya felső',
    },
    {
      id: 3,
      name: 'Wolverine',
      superPower: 'Immortality',
      address: 'Újpest',
    },
    {
      id: 4,
      name: 'Son Goku',
      superPower: 'Ultra Instinct',
      address: 'Újlipótváros',
    },
    {
      id: 5,
      name: 'Beerus',
      superPower: 'God of Destruction',
      address: 'Sashalom',
    },
  ];

  constructor() {}

  getAll(): Hero[] {
    return this.list;
  }
}
