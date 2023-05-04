import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ToolsComponent } from './tools.component';
import { TrelloApiService } from 'app/services/trello-api.service';
import { of } from 'rxjs';

describe('ToolsComponent', () => {
  let component: ToolsComponent;
  let fixture: ComponentFixture<ToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the id input', () => {
    const testId = 'testId';
    component.id = testId;
    fixture.detectChanges();
    expect(component.id).toEqual(testId);
  });

  it('should populate toolCard with data', () => {
    const testData = [
      { name: 'Tool 1' }, 
      { name: 'Tool 2' }, 
      { name: 'Tool 3' }];
    spyOn(TrelloApiService.prototype, 'getTools').and.returnValue(of(testData));
    component.ngOnInit();
    expect(component.toolCard).toEqual(testData);
  });

  it('should render tool cards', () => {
    const testData = [{ name: 'Tool 1' }, { name: 'Tool 2' }, { name: 'Tool 3' }];
    component.toolCard = testData;
    fixture.detectChanges();
    const toolCardElements = fixture.nativeElement.querySelectorAll('.tool-card__card-title');
    expect(toolCardElements.length).toEqual(testData.length);
    for (let i = 0; i < testData.length; i++) {
      expect(toolCardElements[i].textContent).toContain(testData[i].name);
    }
  });
  
});
