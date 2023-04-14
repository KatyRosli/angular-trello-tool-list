import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrelloApiService {
  [x: string]: any;
  constructor(private http: HttpClient) { }

  getOperations(): Observable<any> {
    const url = `https://api.trello.com/1/boards/${environment.trello.boardId}/lists?cards=open&card_fields=name&fields=name&key=${environment.trello.apiKey}&token=${environment.trello.apiToken}`;
    return this.http.get<any>(url);
  }
}
