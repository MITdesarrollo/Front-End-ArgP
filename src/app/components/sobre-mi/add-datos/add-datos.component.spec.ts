import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDatosComponent } from './add-datos.component';

describe('AddDatosComponent', () => {
  let component: AddDatosComponent;
  let fixture: ComponentFixture<AddDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
