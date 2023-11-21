import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appselector]'
})
export class DynamicComp {
    constructor(public viewcontainref: ViewContainerRef){}

    
}