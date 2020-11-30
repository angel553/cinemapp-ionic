import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../api/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  peliculas = [] /*[
    {
      titulo: "Toy Story",
      anio: 2007,
      director: "John Lasseter",
      imagen: "https://www.efeeme.com/wp-content/uploads/2016/10/toy-story-16-10-16-b.jpg"
    },
    {
      titulo: "Jumanji",
      anio: 2010,
      director: "Joe Johnston",
      imagen: "https://es.web.img3.acsta.net/pictures/14/05/07/12/13/408663.jpg"
    }
  ];
*/
  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(){
    this.peliculasService.peliculas.subscribe(peliculas => {
      this.peliculas = peliculas;
    });
    this.peliculasService.getPeliculas();
  }
}
