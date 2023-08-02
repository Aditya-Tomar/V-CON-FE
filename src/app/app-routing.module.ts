import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/component/login/login.component';
import { RegisterComponent } from 'src/component/register/register.component';
import { UserProfileComponent } from 'src/component/user-profile/user-profile.component';
import { VideoConverterComponent } from 'src/component/video-converter/video-converter.component';
import { VideoPlayerPageComponent } from 'src/component/video-player-page/video-player-page.component';

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
