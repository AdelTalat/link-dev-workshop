import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/shared/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = 'http://localhost:3000';
  constructor(
    private httpClient: HttpClient
  ) { }

  getCategories() {
    return this.httpClient.get<Category[]>(`${this.baseUrl}/sourceCategory`);
  }

  getCategory(id) {
    return this.httpClient.get<Category>(`${this.baseUrl}/sourceCategory/${id}`);
  }
}
