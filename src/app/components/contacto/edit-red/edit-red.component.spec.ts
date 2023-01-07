import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRedComponent } from './edit-red.component';

describe('EditRedComponent', () => {
  let component: EditRedComponent;
  let fixture: ComponentFixture<EditRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
