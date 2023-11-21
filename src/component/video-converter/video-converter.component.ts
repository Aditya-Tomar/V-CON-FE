import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VideoTranscodeService } from 'src/services/video-transcode-service';

@Component({
  selector: 'app-video-converter',
  templateUrl: './video-converter.component.html',
  styleUrls: ['./video-converter.component.scss']
})
export class VideoConverterComponent {

  public buttonName: string = 'Transcode';
  public fileName: string='';
  public inputNameTemplate!: TemplateRef<any>;
  public isVideoTranscoded: boolean = true;
  public $isVideoTranscoded: BehaviorSubject<boolean> = this._videoTranscodeService.$isVideoTranscoded;
  public $videoLink: BehaviorSubject<string> = this._videoTranscodeService.$videoLinkSubject;
  public $isLoading:BehaviorSubject<boolean> = this._videoTranscodeService.$isLoadingSubject;
  @ViewChild("name") name!: TemplateRef<any>;
  @ViewChild("nothing") nothing!: TemplateRef<any>;

  constructor(private _videoTranscodeService: VideoTranscodeService){}

  public downloadVideo(){
    this.$videoLink.subscribe(s => {
      console.log('ss',s);
      const ele = document.createElement('a');
      ele.setAttribute('href', s);
      console.log('data:video/mp4;base64,'+ encodeURIComponent(s));
      ele.setAttribute('download', this.fileName+'.mp4');
      document.body.append(ele);
      ele.click();
      document.body.removeChild(ele);
    })
  }
  public toggleNameTemplate(){
    if(this.inputNameTemplate != this.name){
      this.inputNameTemplate = this.name;
    }
    else {
      this.inputNameTemplate = this.nothing;
    }
    // this.downloadVideo();
  }

  public sendVideoToTranscode($event: File) : void {
    const file = $event;
    // const fileReader: FileReader = new FileReader();
    // this.isVideoUploaded = true;
    // fileReader.onload = (e) => { console.log(e?.target?.result);
      // fileReader.onprogress = (e:ProgressEvent<FileReader>) => {console.log( (100 * e.loaded )/ e.total, '%' );};
      // fileReader.readAsArrayBuffer(file);
      
      

      this._videoTranscodeService.sendVideoToTranscode(file || '');
    // }
    // console.log($event);
  }
}
