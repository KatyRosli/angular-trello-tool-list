import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OperationsComponent } from './components/operations/operations.component';
import { HttpClientModule } from '@angular/common/http';
import { ToolsComponent } from './components/tools/tools.component';


@NgModule({
  declarations: [
    AppComponent,
    OperationsComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
