import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ConcCardComponent } from './conc-card/conc-card.component';
import { HandicapComponent } from './handicap/handicap.component';
import { JournalistComponent } from './journalist/journalist.component';
import { FooterComponent } from './footer/footer.component'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ModifyCardComponent } from './modify-card/modify-card.component';
import { DeleteCardComponent } from './delete-card/delete-card.component';
import { ViewCardComponent } from './view-card/view-card.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    ConcCardComponent,
    HandicapComponent,
    JournalistComponent,
    FooterComponent,
    ModifyCardComponent,
    DeleteCardComponent,
    ViewCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})


export class AppModule { }
