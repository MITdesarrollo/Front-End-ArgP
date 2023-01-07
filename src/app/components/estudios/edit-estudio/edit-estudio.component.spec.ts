import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEstudioComponent } from './edit-estudio.component';

describe('EditEstudioComponent', () => {
  let component: EditEstudioComponent;
  let fixture: ComponentFixture<EditEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
