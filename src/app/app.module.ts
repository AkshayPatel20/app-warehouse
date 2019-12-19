import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './auth/signin/signin.component';

import { CustomModule } from './app.custommodule';
import { WelcomeComponent } from './welcome/welcome.component';

import { AuthInterceptor } from './auth/auth-interceptor';
import { AppManagerComponent } from './app-manager/app-manager.component';
import { NavbarComponent } from './header/navbar/navbar.component';

// Firebase Library Added here
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { CommunicateComponent } from './modules/communicate/communicate.component';
import { ComposeBoxComponent } from './modules/communicate/compose-box/compose-box.component';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    WelcomeComponent,
    AppManagerComponent,
    NavbarComponent,
    CommunicateComponent,
    ComposeBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  entryComponents: [ComposeBoxComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
