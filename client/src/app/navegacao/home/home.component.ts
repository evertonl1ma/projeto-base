import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})



export class HomeComponent implements OnInit {

catalogue: any[] = [
	{ id: 1, name: 'Multiplataforma', image: 'crossplat.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.'},
	{ id: 2, name: 'Performance', image: 'performance.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.'},
	{ id: 3, name: 'Produtividade', image: 'produtividade.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.'},
	{ id: 4, name: 'Funcionalidades', image: 'full_dev.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.'},
	{ id: 5, name: 'Multiplataforma', image: 'crossplat.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.'},
	{ id: 6, name: 'Performance', image: 'performance.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.'},
	{ id: 7, name: 'Produtividade', image: 'produtividade.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.'},
	{ id: 8, name: 'Funcionalidades', image: 'full_dev.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.'},
]

constructor() {}

ngOnInit(){}
}
