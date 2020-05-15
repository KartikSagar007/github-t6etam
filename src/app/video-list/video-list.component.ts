import { Component, OnInit, Input, Output } from '@angular/core';
// import { EventEmitter } from 'events';
import { EventEmitter } from "@angular/core";
import { Video } from '../video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  public videosLL : any;
  public vidd: any;
  @Input('videosL') videosWala;
  @Output() SelectVideo = new EventEmitter; //SelectVideo is the event that will be fired

  constructor() {}

  ngOnInit() {
    this.videosLL = this.videosWala;
    // debugger;    
  }

  onSelect(vid: Video){
    console.log(vid);
    // this.vidd = vid;
    // this.SelectVideo.emit(this.vidd);
    this.SelectVideo.emit(vid);
  }

}
