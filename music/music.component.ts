import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  musicTest: any = [];
  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.musicService.musicTestCall()
    .subscribe((data) => {
      this.musicTest = data.results;
    });
  }

}
