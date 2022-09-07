import { Component, OnInit } from '@angular/core';
import { GridReadyEvent } from 'ag-grid-community';
import { LinkRendererComponent } from '../link-renderer/link-renderer.component';

@Component({
  selector: 'app-price-list-search',
  templateUrl: './price-list-search.component.html',
  styleUrls: ['./price-list-search.component.scss'],
})
export class PriceListSearchComponent implements OnInit {
  gridApi: any;
  loading: any;
  constructor() {}

  ngOnInit(): void {}
  showResults: boolean = false;
  columnDefs = [
    { headerName: 'Make', field: 'make', cellRenderer: LinkRendererComponent },
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Price', field: 'price' },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000, id: 1 },
    { make: 'Ford', model: 'Mondeo', price: 32000, id: 2 },
    { make: 'Porsche', model: 'Boxter', price: 72000, id: 3 },
    { make: 'Toyota', model: 'Celica', price: 35000, id: 4 },
    { make: 'Ford', model: 'Mondeo', price: 32000, id: 4 },
    { make: 'Porsche', model: 'Boxter', price: 72000, id: 4 },
    { make: 'Toyota', model: 'Celica', price: 35000, id: 4 },
    { make: 'Ford', model: 'Mondeo', price: 32000, id: 4 },
    { make: 'Porsche', model: 'Boxter', price: 72000, id: 4 },
  ];

  onChangeEvent(e: any): void {
    console.log(e.target.value);
    this.gridApi.setQuickFilter(e.target.value);
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
  search() {
    this.loading = true;
    // this.showResults = true

    setTimeout(() => {
      this.showResults = true;
      this.loading = false;
    }, 1000);
  }
}
