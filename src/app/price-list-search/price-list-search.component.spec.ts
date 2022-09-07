import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceListSearchComponent } from './price-list-search.component';

describe('PriceListSearchComponent', () => {
  let component: PriceListSearchComponent;
  let fixture: ComponentFixture<PriceListSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceListSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
