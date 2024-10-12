import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonExistingComponentComponent } from './non-existing-component.component';

describe('NonExistingComponentComponent', () => {
  let component: NonExistingComponentComponent;
  let fixture: ComponentFixture<NonExistingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonExistingComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonExistingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
