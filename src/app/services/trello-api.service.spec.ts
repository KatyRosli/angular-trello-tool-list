import { TestBed } from '@angular/core/testing';

import { TrelloApiService } from '../services/trello-api.service';

describe('TrelloApiService', () => {
  let service: TrelloApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrelloApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
