import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationsComponent } from './operations.component';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('OperationsComponent', () => {
  let component: OperationsComponent;
  let fixture: ComponentFixture<OperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ HttpClientModule ],
    })
    .compileComponents();
  });

    beforeEach(() => {
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

});
