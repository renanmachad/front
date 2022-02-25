import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpProductsComponent } from './pop-up-products.component';

describe('PopUpProductsComponent', () => {
  let component: PopUpProductsComponent;
  let fixture: ComponentFixture<PopUpProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
