import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgeComponent } from './sge.component';

describe('SgeComponent', () => {
  let component: SgeComponent;
  let fixture: ComponentFixture<SgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
