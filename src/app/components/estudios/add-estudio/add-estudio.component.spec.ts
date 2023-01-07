import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstudioComponent } from './add-estudio.component';

describe('AddEstudioComponent', () => {
  let component: AddEstudioComponent;
  let fixture: ComponentFixture<AddEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
