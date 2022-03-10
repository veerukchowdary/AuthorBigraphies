import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicatinserviceService {
  
  private selectedAuthor = new Subject<string>();
  
  constructor() { }
  
  public getSelectedAuthor(): Observable<string> {
    return this.selectedAuthor.asObservable();
  }

  public updateSelectedAuthor(selectedAuthor: string): void {
    this.selectedAuthor.next(selectedAuthor);
  }
}