import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  @Input() phraseString: string = '';
  direction: number = 1;
  columnKey: string = '';

  heroList = this.heroService.getAll();

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {}

  onColumnSelect(key: string): void {
    if (this.columnKey === key) {
      this.direction = this.direction * -1;
    } else {
      this.direction = 1;
    }
    this.columnKey = key;
  }
}
