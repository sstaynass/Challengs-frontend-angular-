import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapatoComponent } from './sapato.component';

describe('SapatoComponent', () => {
  let component: SapatoComponent;
  let fixture: ComponentFixture<SapatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SapatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
