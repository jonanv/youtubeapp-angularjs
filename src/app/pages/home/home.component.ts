import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private youtubeService: YoutubeService
  ) { }

  ngOnInit(): void {
    this.getPlayListItems();
  }

  private getPlayListItems(): void {
    this.youtubeService.getPlayListItems()
      .pipe(first())
      .subscribe((response: any) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }

}
