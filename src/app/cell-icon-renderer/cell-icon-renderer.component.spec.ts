import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellIconRendererComponent } from './cell-icon-renderer.component';

describe('CellIconRendererComponent', () => {
  let component: CellIconRendererComponent;
  let fixture: ComponentFixture<CellIconRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellIconRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellIconRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
