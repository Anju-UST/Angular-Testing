import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaComponent } from './pizza.component';

describe('PizzaComponent', () => {
  let component: PizzaComponent;
  let fixture: ComponentFixture<PizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have a title "i love pizza!"`, async(() => {
    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual("i love pizza!");
  }));
});
//The fixture TestBed.createComponent() method allows accessing the component and its template.

