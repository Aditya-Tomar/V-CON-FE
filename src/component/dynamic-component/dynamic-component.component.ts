import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { DynamicComp } from '../dynamic.directive';
import { VideoUploadPageComponent } from '../video-upload-page/video-upload-page.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit {

  @ViewChild(DynamicComp, {static:true}) appselector!: DynamicComp;
  public arr = [
    {component: VideoUploadPageComponent},
    {component: VideoUploadPageComponent},
  ]

  constructor(private cfr: ComponentFactoryResolver ){}

  ngOnInit(){
    this.load();
  }

  private load(){
    this.arr.forEach( a => {
      // const s = this.cfr.resolveComponentFactory(a.component);/
      const comporef = this.appselector.viewcontainref.createComponent(a.component);
      console.log(comporef);
    })
  }
}
