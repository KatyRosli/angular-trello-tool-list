import { Component } from '@angular/core';
import { TrelloApiService } from 'app/services/trello-api.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})

export class OperationsComponent {
  operationList: any[] = [];

  constructor(private trelloApiService: TrelloApiService) { 
  }

  ngOnInit() {
    this.trelloApiService.getOperations().subscribe(data => {
      this.operationList = data;
    });
  }
}
