import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search query when Search button is clicked', () => {
    const searchQuery = 'test';
    spyOn(component.onSearchPressed, 'emit');
    component.searchQuery = searchQuery;
    fixture.detectChanges();
    const searchButton = fixture.debugElement.query(By.css('.search__button')).nativeElement;
    searchButton.click();
    expect(component.onSearchPressed.emit).toHaveBeenCalledWith(searchQuery);
  });
});
