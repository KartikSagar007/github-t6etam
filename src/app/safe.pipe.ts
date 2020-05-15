import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer){}
  // transform(value: any, args?: any): any {
  //   return null;
  // }
  transform(_url:any){
    if (!_url) { return ''; }
    if(_url){
      _url = _url.replace('watch?v=','embed/');
    }
    // debugger;

    return this.sanitizer.bypassSecurityTrustResourceUrl(_url);
  }

}
