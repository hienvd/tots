import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TotsComponent } from './tots/tots.component';
import { AppComponent } from './app.component';

import { MatButtonModule, MatIconModule, MatTabsModule, MatTableModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TotsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [TotsComponent]
})
export class AppModule { }
