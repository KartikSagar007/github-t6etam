import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import { Video } from './video';

@Injectable()
export class VideoService {

  private _getUrl = "/api/videos";
  private _postUrl = "/api/videos";
  private _putUrl = "/api/videos/";
  private _deleteUrl = "/api/videos/";

  constructor(private _http: Http) { }

  getVideos() {
    return this._http.get(this._getUrl)
      .map((response: Response) => {
        return response.json();
      }); //the response has to be mapped to json
  }
  addVideo(video: Video){
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl,JSON.stringify(video),options)
    .map((response: Response) => {
      return response.json();
    });
  }
  updateVideo(video: Video){
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.put(this._putUrl + video._id,JSON.stringify(video),options)
    .map((response: Response) => {
      return response.json();
    });
  }
  deleteVideo(video: Video){
    return this._http.delete(this._deleteUrl + video._id)
    .map((response: Response) => {    //MAP Applies a given project function to each value emitted by the source Observable, and emits the resulting values as an Observable.
      return response.json();
    });
  }
}
