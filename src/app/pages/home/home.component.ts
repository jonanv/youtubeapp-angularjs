import { Component, OnInit } from '@angular/core';

// Imports
import { first } from 'rxjs/operators';
import { YoutubeService } from '../../services/youtube.service';
import { Playlist, Item, Snippet } from '../../interfaces/playlist.interface';
import Swal from 'sweetalert2';

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

  public getPlaylistItems(): void {
    this.youtubeService.getPlaylistItems()
      .pipe(first())
      .subscribe((response: Snippet[]) => {
        this.videos.push(...response);
      }, (error) => {
        console.log(error);
      });
  }

  public showVideo(video: Snippet) {
    Swal.fire({
      html: `
        <h4>${ video.title }</h4>
        <hr>
        <iframe width="100%"
                height="315"
                src="https://www.youtube.com/embed/${ video.resourceId.videoId }"
                title="${ video.title }"
                frameborder="0"
                allow="accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture"
                allowfullscreen>
        </iframe>
      `
    });
  }

}
