import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OperationsComponent } from './components/operations/operations.component';
import { HttpClientModule } from '@angular/common/http';
import { ToolsComponent } from './components/tools/tools.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OperationsComponent,
    ToolsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CdkAccordionModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
