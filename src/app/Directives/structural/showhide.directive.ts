import { Directive, TemplateRef, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appshowhide]'
})
export class ShowhideDirective {

  constructor(private _tempRef: TemplateRef<any>, private _vcr: ViewContainerRef ) { }
  @Input('showhide') set showhide(condition : boolean){
    console.log(condition);
    if(condition){
      this._vcr.createEmbeddedView(this._tempRef);
    }else{
      this._vcr.clear();
    }
  }

  /*@Input() showhide:boolean;

  showHide(showhide){
    console.log(showhide);
    if(showhide){
      this._vcr.createEmbeddedView(this._tempRef);
    }else{
      this._vcr.clear();
    }*/

  
}
