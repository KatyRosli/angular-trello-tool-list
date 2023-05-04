import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsComponent } from './operations.component';
import { HttpClientModule } from '@angular/common/http';

describe('OperationsComponent', () => {
  let component: OperationsComponent;
  let fixture: ComponentFixture<OperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsComponent ],
      imports: [ HttpClientModule ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize operationList and filteredOperationList', () => {
    expect(component.operationList).toBeDefined();
    expect(component.filteredOperationList).toBeDefined();
    expect(component.operationList.length).toEqual(0);
    expect(component.filteredOperationList.length).toBe(0);
  });

  it('should display all operations when the search term is empty', () => {
    component.operationList = [
      { 
        id: '1',
        name: 'Operation 1',
        closed: false,
        idBoard: 'board1'
      },
      {
        id: '2',
        name: 'Operation 2',
        closed: false,
        idBoard: 'board2'
      },
      {
        id: '3',
        name: 'Operation 3',
        closed: false,
        idBoard: 'board3'
      }
    ];
    fixture.detectChanges();
    const cardHeaders = fixture.nativeElement.querySelectorAll('.operations-list__card-header');
    expect(cardHeaders.length).toBe(3);
    expect(cardHeaders[0].textContent.trim()).toBe('Operation 1');
    expect(cardHeaders[1].textContent.trim()).toBe('Operation 2');
    expect(cardHeaders[2].textContent.trim()).toBe('Operation 3');
  });

  it('should display only matches operations when the search term is not empty', () => {
    component.operationList = [ 
      {
        id: '1',
        name: 'Operation 1',
        closed: false,
        idBoard: 'board1'
      },
      {
        id: '2',
        name: 'Operation 2',
        closed: false,
        idBoard: 'board2'
      },
      {
        id: '3',
        name: 'Operation 3',
        closed: false,
        idBoard: 'board3'
      }
    ];
    fixture.detectChanges();
    const searchInput = fixture.nativeElement.querySelector('.search__input');
    searchInput.value = 'operation 2';
    searchInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const cardHeaders = fixture.nativeElement.querySelector('.operation-list__card-header');
    expect(cardHeaders.length).toBe(1);
    expect(cardHeaders[0].textContent.trim()).toBe('Operation 2');
  });

  it('should reset filteredOperationList when the search term is empty', () =>{
    component.operationList = [
      {
        id: '1',
        name: 'Operation 1',
        closed: false,
        idBoard: 'board1'
      },
      {
        id: '2',
        name: 'Operation 2',
        closed: false,
        idBoard: 'board2'
      },
      {
        id: '3',
        name: 'Operation 3',
        closed: false,
        idBoard: 'board3'
      }
    ];
    fixture.detectChanges();
    const searchInput = fixture.nativeElement.querySelector('.search__input');
    searchInput.value = 'operation 2';
    searchInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.filteredOperationList).toEqual(component.operationList);
  });
});
