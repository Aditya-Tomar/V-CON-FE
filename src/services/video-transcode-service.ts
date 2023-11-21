import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class VideoTranscodeService {
    public $isVideoTranscoded = new BehaviorSubject<boolean>(false);
    public $videoLinkSubject = new BehaviorSubject<string>('');
    public $isLoadingSubject = new BehaviorSubject<boolean>(false);

    constructor(private httpService: HttpClient){}

    fetchVideo(){
        // return this.httpService.get("", { responseType: "arraybuffer" });
    }

    sendVideoToTranscode($event: File ): void {
        console.log('s',$event)
        const file = new FormData();
        file.append('video', $event);
        // const data = { a: '232', file:file };
        console.log("Called")
        this.httpService.post("http://localhost:3000/api/video/transcode", file).subscribe( (res:any) => {
            this.$isLoadingSubject.next(false);
            const ele = document.createElement('a');
            ele.setAttribute('href', res);
            ele.setAttribute('download', 'video'+'.webm');
            ele.click();
            // const ele = document.createElement('a');
            // ele.setAttribute('href', res);
            // // console.log('data:video/mp4;base64,'+ encodeURIComponent(s));
            // ele.setAttribute('download', 'video.mp4');
            // document.body.append(ele);
            // ele.click();
            // document.body.removeChild(ele);
            // console.log(res);
            // const s = new Blob([res], {type:'webm'});
            // buffer = new Blob([new Uint8Array(buffer)], { type: downloadType });
            // console.log(URL.createObjectURL(s));
            this.$videoLinkSubject.next(res);
            this.$isVideoTranscoded.next(true);
        });
    }
}