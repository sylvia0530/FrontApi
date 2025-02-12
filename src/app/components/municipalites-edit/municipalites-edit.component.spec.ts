import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalitesEditComponent } from './municipalites-edit.component';

describe('MunicipalitesEditComponent', () => {
  let component: MunicipalitesEditComponent;
  let fixture: ComponentFixture<MunicipalitesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MunicipalitesEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MunicipalitesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
