import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncompleteTodoComponent } from './incomplete-todo.component';

describe('IncompleteTodoComponent', () => {
  let component: IncompleteTodoComponent;
  let fixture: ComponentFixture<IncompleteTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IncompleteTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncompleteTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
