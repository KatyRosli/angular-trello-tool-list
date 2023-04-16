import { Component } from '@angular/core';
import { TrelloApiService } from 'app/services/trello-api.service';
import { Operations } from '../../models/data.interface';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})

export class OperationsComponent {
  operationList: Operations[] = [];
  filteredOperationList: Operations[] = [];

  constructor(private trelloApiService: TrelloApiService) { 
  }

  ngOnInit() {
    this.trelloApiService.getOperations().subscribe(data => {
      this.operationList = data;
      this.filteredOperationList = this.operationList;
    });
  }

  onSearchPressed(term: string) {
    if (!term || term.trim().length == 0) {
      this.filteredOperationList = this.operationList;
    }
    this.filteredOperationList = this.operationList.filter(operation =>
      operation.name.toLowerCase().includes(term)
    );
  }
}
