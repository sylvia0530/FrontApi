import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuelsComponent } from './manuels.component';

describe('ManuelsComponent', () => {
  let component: ManuelsComponent;
  let fixture: ComponentFixture<ManuelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManuelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManuelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
