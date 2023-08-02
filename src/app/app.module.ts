import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerPageComponent } from '../component/video-player-page/video-player-page.component';
import { VideoPlayerComponent } from '../component/video-player/video-player.component';
import { VideoSuggestionListComponent } from '../component/video-suggestion-list/video-suggestion-list.component';
import { VideoUploadPageComponent } from '../component/video-upload-page/video-upload-page.component';
import { LoginComponent } from '../component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../component/register/register.component';
import { UserProfileComponent } from 'src/component/user-profile/user-profile.component';
import { HeaderComponent } from '../component/header/header.component';
import { VideoConverterComponent } from '../component/video-converter/video-converter.component';

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
