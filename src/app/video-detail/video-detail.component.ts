import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import { EventEmitter } from 'events';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  private editTitle : boolean = false;
  @Input() video;
  @Output() updateVideoEvent = new EventEmitter;
  @Output() deleteVideoEvent = new EventEmitter;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.editTitle = false;
  }
  
  onTitleClick(){
    this.editTitle = true;
  }

  getEmbedURL(item){
    return this.sanitizer.bypassSecurityTrustResourceUrl(item);
  }
  updateVideo(){
    this.updateVideoEvent.emit(this.video);
  }
  deleteVideo(){
    this.deleteVideoEvent.emit(this.video)
  }

}
