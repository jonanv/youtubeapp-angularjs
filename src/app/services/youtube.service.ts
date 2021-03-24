import { Injectable } from '@angular/core';

// Imports
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Playlist } from '../interfaces/playlist.interface';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl: string = 'https://www.googleapis.com/youtube/v3/';
  private apiKey: string = 'AIzaSyDHhGSKVNc5A-LoHP57s_UnqdRt6fpbfmY';
  private playlistId: string = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken: string = 'CAoQAA';

  private part: string = 'snippet';
  private maxResults: string = '10';

  //https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDHhGSKVNc5A-LoHP57s_UnqdRt6fpbfmY&playlistId=UUuaPTYj15JSkETGnEseaFFg&maxResults=10&pageToken=CAoQAA

  constructor(
    private http: HttpClient
  ) { }

  private getQuery(query: string): Observable<Object> {
    const url = `${ this.youtubeUrl }${ query }`;
    const params =  new HttpParams()
      .set('part', this.part)
      .set('maxResults', this.maxResults)
      .set('playlistId', this.playlistId)
      .set('key', this.apiKey);

    return this.http.get(url, { params });
  }

  public getPlayListItems(): Observable<Playlist> {
    return this.getQuery('playlistItems')
      .pipe(map((response: Playlist) => {
        return response;
      }));
  }
}
