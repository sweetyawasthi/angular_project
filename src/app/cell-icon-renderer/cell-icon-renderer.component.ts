import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-cell-icon-renderer',
  templateUrl: './cell-icon-renderer.component.html',
  styleUrls: ['./cell-icon-renderer.component.scss'],
})
export class CellIconRendererComponent implements ICellRendererAngularComp {
  params!: ICellRendererParams<any, any>;

  constructor() {}
  agInit(params: ICellRendererParams<any, any>): void {
    this.params = params;
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}
}
