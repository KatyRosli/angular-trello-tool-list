import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TrelloApiService } from '../services/trello-api.service';
import { environment } from 'environments/environment';
import { throwError } from 'rxjs';

describe('TrelloApiService', () => {
  let service: TrelloApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TrelloApiService]
    });
    service = TestBed.inject(TrelloApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

   it('should get operations', () => {
    const expectedUrl = `https://api.trello.com/1/boards/${environment.trello.boardId}/lists?cards=open&card_fields=name&fields=name&key=${environment.trello.apiKey}&token=${environment.trello.apiToken}`;
    const expectedResponse = [{ name: 'List 1', id: 'list1' }, { name: 'List 2', id: 'list2' }];
    service.getOperations().subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });
    const request = httpMock.expectOne(expectedUrl);
    expect(request.request.method).toBe('GET');
    request.flush(expectedResponse);
  });

  it('should get tools for a list', () => {
    const listId = 'listId';
    const expectedUrl = `https://api.trello.com/1/lists/${listId}/cards?key=${environment.trello.apiKey}&token=${environment.trello.apiToken}`;
    const expectedResponse = [{ name: 'Card 1', id: 'card1'}, { name: 'Card 2', id: 'card2'}];
    service.getTools(listId).subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });
    const request = httpMock.expectOne(expectedUrl);
    expect(request.request.method).toBe('GET');
    request.flush(expectedResponse);
    });
});
