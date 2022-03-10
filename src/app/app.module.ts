import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SearchAuthorComponent } from './components/search-author/search-author.component';
import { AuthorInfoComponent } from './components/author-info/author-info.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    SearchAuthorComponent,
    AuthorInfoComponent,
  ],
  imports: [    
    BrowserModule,
    FormsModule,
    AutoCompleteModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TabViewModule,
    TableModule,
    ToggleButtonModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
