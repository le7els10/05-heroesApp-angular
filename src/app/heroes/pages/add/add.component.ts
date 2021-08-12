import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [],
})
export class AddComponent implements OnInit {
  hero: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
  };

  publisher = [
    {
      value: 'DC Comics',
    },
    {
      value: 'Marvel Comics',
    },
  ];

  constructor(private _heroService: HeroesService) {}

  ngOnInit(): void {}

  guardar = () => {
    this._heroService.addHero(this.hero).subscribe((res) => {
      console.log(res);
    });
  };
}
