import { Component, OnInit } from '@angular/core';

// Imports
import { first } from 'rxjs/operators';
import { YoutubeService } from '../../services/youtube.service';
import { Playlist, Item, Snippet } from '../../interfaces/playlist.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public videos: Snippet[] = [];

  constructor(
    private youtubeService: YoutubeService
  ) { }

  ngOnInit(): void {
    this.getPlaylistItems();
  }

  private getPlaylistItems(): void {
    this.youtubeService.getPlaylistItems()
      .pipe(first())
      .subscribe((response: Snippet[]) => {
        this.videos.push(...response);
        console.log(this.videos);
      }, (error) => {
        console.log(error);
      });
  }

}
