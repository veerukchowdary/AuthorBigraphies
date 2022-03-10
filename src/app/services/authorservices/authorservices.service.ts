import { Injectable } from '@angular/core';
import { BaseService } from '../baseservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends BaseService {

  getAuthors(searchText: string) {
    const methodName: string = "search/authors.json?q=" + searchText;
    return this.get(methodName);
  }

  getAuthorDetails(authorKey: string) {
    const methodName: string = "authors/" + authorKey + ".json";
    return this.get(methodName);
  }

  getAuthorWorks(authorKey: string) {
    const methodName: string = "authors/" + authorKey + "/works.json";
    return this.get(methodName);
  }
}