import { Component } from '@angular/core';
import { TrelloApiService } from 'src/app/services/trello-api.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})

export class ToolsComponent {
  operationList: any[] = [];

  constructor(private trelloApiService: TrelloApiService) { 
  }

  ngOnInit() {
    this.trelloApiService.getTools().subscribe(data => {
      this.operationList = data;
    });
  }
}
