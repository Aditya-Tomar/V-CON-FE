import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-video-upload-page',
  templateUrl: './video-upload-page.component.html',
  styleUrls: ['./video-upload-page.component.scss']
})
export class VideoUploadPageComponent {
  
  @Input() public buttonName: string = 'Upload';
  @Input() public showLoader: boolean = true;
  @Output() public onButtonClicked: EventEmitter<File> = new EventEmitter();

  file!: File[];
  isVideoUploaded:boolean = false;

  constructor(){}

  public fileBrowseHandler($event: any) {
    this.file =[$event.target.files[0]];
    $event.target.value="";
    const fileReader: FileReader = new FileReader();
    this.isVideoUploaded = true;
    fileReader.onprogress = (e:ProgressEvent<FileReader>) => {console.log( (100 * e.loaded )/ e.total, '%' );};
    fileReader.readAsArrayBuffer(this.file[0]);
  }

  public buttonClicked(){
    this.onButtonClicked.emit(this.file[0]);
  }

  public clearButton() {
    this.isVideoUploaded = false;
    this.file = [];
  }
}
