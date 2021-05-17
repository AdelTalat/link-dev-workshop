import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  categories: Category[] = [];
  selectedCategoryId;
  isAscending = true;

  @Output() filterItem = new EventEmitter<number>();
  @Output() searchQuery = new EventEmitter<string>();
  @Output() sortFlag = new EventEmitter<boolean>();

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  onFilterWithCategory() {
    console.log(this.selectedCategoryId);
    this.filterItem.emit(this.selectedCategoryId);
  }

  onSearch(value) {
    this.searchQuery.emit(value);
  }

  onSort() {
    this.isAscending = !this.isAscending;
    this.sortFlag.emit(this.isAscending);
  }

}
