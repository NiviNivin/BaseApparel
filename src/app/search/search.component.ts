// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.css']
// })
// export class SearchComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/**
 * @title Highlight the first autocomplete option
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['Apron',
  'Belt', 'Boots', 'Bracelet',
  'Cap', 'Coat', 'Crown','Contact lenses','Casuals',
  'Dress','Earrings','Earphones','Ear muffs',
  'Frock','Formals',
  'Glasses','Gloves','Hat','Headphones','Hair bands','Ipad',
  'Jacket', 'Jeans','Jewelry','Kimono','Leggings','Lipstick','Mask','Necklace',
  'Overalls','Ornaments','Pyjamas','Pants','Raincoat','Ring',
  'Sandals', 'South' ,'Scarf','Shirt','Shoes','Socks','T-Shirt', 'Trousers','Tie','Uniform','Veil',
  'Watch', 'Wig', 'Wetsuit'];

  count="";
  apparel="";

  // Callfunc(){
  //   this.apparel =this.count;
  //   return this.apparel;
  // }


  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
