import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.scss'],
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() hero!: Hero;

  constructor() {}

  ngOnInit(): void {}
}
