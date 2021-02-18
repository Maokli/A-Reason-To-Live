import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ReasonCardComponent } from './reasons/reason-card/reason-card.component';
import { ReasonsListComponent } from './reasons/reasons-list/reasons-list.component';
import { ReasonInputComponent } from './reasons/reason-input/reason-input.component';
import { ReasonsComponent } from './reasons/reasons.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ReasonCardComponent,
    ReasonsListComponent,
    ReasonInputComponent,
    ReasonsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ReasonsListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
