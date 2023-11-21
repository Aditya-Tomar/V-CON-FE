import { Component, OnInit } from '@angular/core';
import { VideoTranscodeService } from 'src/services/video-transcode-service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {


  constructor(private _videoTranscodeService: VideoTranscodeService){}

  ngOnInit(){
    // this.videoService.fetchVideo().subscribe( d =>{
    // console.log(d);console.log("here")
    // })
  }
  public played(){
    console.log("play")
  }

  public paused(){
    console.log("paused")
  }

  public dataLoaded(){
    console.log('Dataa loaded');
  }

  public progress(){
    console.log("progress")
  }

  public ratechange(){
    console.log('Rate Change');
  }

}
