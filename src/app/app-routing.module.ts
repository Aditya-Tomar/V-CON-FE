import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/components/login/login.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { UserProfileComponent } from 'src/components/user-profile/user-profile.component';
import { VideoConverterComponent } from 'src/components/video-converter/video-converter.component';
import { VideoPlayerPageComponent } from 'src/components/video-player-page/video-player-page.component';
import { VideoUploadPageComponent } from 'src/components/video-upload-page/video-upload-page.component';

const routes: Routes = [
  {
    path:"",
    redirectTo: "login",
    pathMatch:'full',
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "profile",
    component: UserProfileComponent,
    canActivate: []
  },
  {
    path:"upload",
    component: VideoUploadPageComponent
  },
  {
    path:"video-player",
    component: VideoPlayerPageComponent
  },
  {
    path: "converter",
    component: VideoConverterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
