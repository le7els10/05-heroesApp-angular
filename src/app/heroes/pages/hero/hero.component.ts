import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [],
})
export class HeroComponent implements OnInit {
  hero!: Hero;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroService: HeroesService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params
      .pipe(switchMap(({ id }) => this._heroService.getHeroById(id)))
      .subscribe((hero) => {
        this.hero = hero;
      });
  }
}
