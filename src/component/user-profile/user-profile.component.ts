import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user-service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public uploadedVideoCount:number = 0;
  public convertedVideoCount: number=0;
  @ViewChild('inputcount') inputCount: any;

  constructor( private _userService: UserService, private _router: Router){}

  ngOnInit(): void {
    this._userService.getUserInfo().subscribe( data => {
      this.setCount(data.count);
    });
  }

  private setCount(videoCount: number): void {
    let count=1;
    const intervalId = setInterval(() => {
      this.uploadedVideoCount = count;
      count++;
      if(count === videoCount){
        clearInterval(intervalId);
      }
    }, videoCount < 50 ? 50: 0);
  }

  public uploadVideo() {
    console.log("Video uploaded");
    this._router.navigateByUrl("");
  }
}
