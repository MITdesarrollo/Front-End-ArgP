import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRedComponent } from './add-red.component';

describe('AddRedComponent', () => {
  let component: AddRedComponent;
  let fixture: ComponentFixture<AddRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
