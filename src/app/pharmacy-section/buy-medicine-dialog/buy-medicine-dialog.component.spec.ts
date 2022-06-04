import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyMedicineDialogComponent } from './buy-medicine-dialog.component';

describe('BuyMedicineDialogComponent', () => {
  let component: BuyMedicineDialogComponent;
  let fixture: ComponentFixture<BuyMedicineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyMedicineDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyMedicineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
