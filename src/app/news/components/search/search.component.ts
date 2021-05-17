import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() filterItem = new EventEmitter<number>();
  categories: Category[] = [];
  selectedCategoryId;
  isAscending = true;
  constructor() { }

  ngOnInit() {
  }

  onFilterWithCategory() {
    this.filterItem.emit(this.selectedCategoryId);
  }

}
