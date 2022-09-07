import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { CellIconRendererComponent } from '../cell-icon-renderer/cell-icon-renderer.component';

@Component({
  selector: 'app-price-detail',
  templateUrl: './price-detail.component.html',
  styleUrls: ['./price-detail.component.scss'],
})
export class PriceDetailComponent implements OnInit {
  loading!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
  showResults: any;
  columnDefs = [
    { headerName: '', field: 'edit', cellRenderer: CellIconRendererComponent },
    {
      headerName: 'Action',
      field: 'action',
      cellRenderer: (params: ICellRendererParams) => {
        // put the value in bold
        if (params.data.action) {
          return `<button  class="btn btn-danger btn-sm m-1 ">Deactivate</button>`;
        } else {
          return '';
        }
      },
    },
    { headerName: 'Make', field: 'make' },
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    {
      headerName: 'Price Status',
      field: 'priceStatus',
      cellRenderer: (params: ICellRendererParams) => {
        // put the value in bold
        if (params.data.priceStatus) {
          return `<button  class="btn btn-danger btn-sm m-1 ">Draft</button>`;
        } else {
          return `<button  class="btn btn-success btn-sm m-1 ">Current</button>`;
        }
      },
    },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Price', field: 'price' },
  ];

  rowData = [
    {
      make: 'Toyota',
      model: 'Celica',
      price: 35000,
      id: 1,
      edit: true,
      delete: true,
      action: true,
    },
    {
      make: 'Ford',
      model: 'Mondeo',
      price: 32000,
      id: 2,
      edit: true,
      action: false,
      priceStatus: true,
    },
    {
      make: 'Porsche',
      model: 'Boxter',
      price: 72000,
      id: 3,
      edit: true,
      action: true,
    },
    {
      make: 'Toyota',
      model: 'Celica',
      price: 35000,
      id: 4,
      edit: false,
      priceStatus: true,
    },
    {
      make: 'Ford',
      model: 'Mondeo',
      price: 32000,
      id: 4,
      edit: true,
      delete: true,
    },
    { make: 'Porsche', model: 'Boxter', price: 72000, id: 4, edit: false },
    { make: 'Toyota', model: 'Celica', price: 35000, id: 4, edit: true },
    { make: 'Ford', model: 'Mondeo', price: 32000, id: 4, edit: false },
    { make: 'Porsche', model: 'Boxter', price: 72000, id: 4, edit: true },
  ];
}
