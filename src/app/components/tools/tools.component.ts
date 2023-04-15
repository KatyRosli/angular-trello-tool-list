import { Component, Input } from '@angular/core';
import { TrelloApiService } from 'app/services/trello-api.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})

export class ToolsComponent {
  @Input()
  id!: string;

  toolCard: any[] = [];

  constructor(private trelloApiService: TrelloApiService) { 
  }

  ngOnInit() {
    this.trelloApiService.getTools(this.id).subscribe((data: any[]) => {
      this.toolCard = data;
    });
  }
}
