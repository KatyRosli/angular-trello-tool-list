import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Operations } from '../../models/data.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input()
  operationsList: Operations[] = [];
  @Output() onSearchPressed = new EventEmitter<any>();
  filteredOperations: Operations[] = [];
  searchQuery = '';

  private searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject.pipe(debounceTime(300)).subscribe(() => this.onSearch());
  }

  onSearch() {
    const searchText = this.searchQuery.toLowerCase();
    // this.filteredOperations = this.operationsList.filter(operation =>
    //   operation.name.toLowerCase().includes(searchText)
    // );
    this.onSearchPressed.emit(searchText);
  }
}
