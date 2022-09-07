import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceListSearchComponent } from './price-list-search/price-list-search.component';
import { PriceDetailComponent } from './price-detail/price-detail.component';
import { LinkRendererComponent } from './link-renderer/link-renderer.component';
import { CellIconRendererComponent } from './cell-icon-renderer/cell-icon-renderer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceListSearchComponent,
    PriceDetailComponent,
    LinkRendererComponent,
    CellIconRendererComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
