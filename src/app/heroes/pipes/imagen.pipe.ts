import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(hero: Hero): string {
    if (!hero.id && !hero.img) {
      return `assets/no-image.png`;
    } else if (hero.img) {
      return hero.img;
    } else {
      return `assets/heroes/${hero.id}.jpg`;
    }
  }
}
