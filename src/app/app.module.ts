import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerPageComponent } from '../components/video-player-page/video-player-page.component';
import { VideoPlayerComponent } from '../components/video-player/video-player.component';
import { VideoSuggestionListComponent } from '../components/video-suggestion-list/video-suggestion-list.component';
import { VideoUploadPageComponent } from '../components/video-upload-page/video-upload-page.component';
import { LoginComponent } from '../components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../components/register/register.component';
import { UserProfileComponent } from 'src/components/user-profile/user-profile.component';
import { HeaderComponent } from '../components/header/header.component';
import { VideoConverterComponent } from '../components/video-converter/video-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerPageComponent,
    VideoPlayerComponent,
    VideoSuggestionListComponent,
    VideoUploadPageComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    HeaderComponent,
    VideoConverterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
