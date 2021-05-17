import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'src/app/shared/models/article';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseUrl = 'http://localhost:3000';
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllNews() {
    return this.httpClient.get<Article[]>(`${this.baseUrl}/articles`);
  }

  getNewsById(id) {
    return this.httpClient.get<Article>(`${this.baseUrl}/articles/${id}`);
  }
}
