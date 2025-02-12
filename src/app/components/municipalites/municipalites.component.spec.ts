import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalitesComponent } from './municipalites.component';

describe('MunicipalitesComponent', () => {
  let component: MunicipalitesComponent;
  let fixture: ComponentFixture<MunicipalitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MunicipalitesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MunicipalitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
