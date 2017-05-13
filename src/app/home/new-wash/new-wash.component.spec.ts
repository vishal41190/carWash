import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWashComponent } from './new-wash.component';

describe('NewWashComponent', () => {
  let component: NewWashComponent;
  let fixture: ComponentFixture<NewWashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
