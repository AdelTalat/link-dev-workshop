import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  categories: Category[] = [];
  selectedCategoryId;
  isAscending = true;
  constructor() { }

  ngOnInit() {
  }

}
