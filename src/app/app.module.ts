import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatInputModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConvertComponent } from './convert/convert.component';
import { BourseComponent } from './convert/bourse/bourse.component';
import { NavbarComponent } from './convert/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { QuichaudComponent } from './convert/quichaud/quichaud.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertComponent,
    BourseComponent,
    NavbarComponent,
    QuichaudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
