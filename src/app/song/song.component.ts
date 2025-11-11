import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SongInterface } from '../data/SongInterface';
import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-song',
  imports: [NgStyle, DatePipe, CurrencyPipe],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css'
})
export class SongComponent {
  constructor(private dataService: DataService) { }

  @Input({required: true}) song!: SongInterface;

  isTopSong : boolean = false;

  ngOnInit() {
    this.isTopSong = this.dataService.isTopSong(this.song.id);
    this.dataService.votesHaveChanged.subscribe(() => {
      this.isTopSong = this.dataService.isTopSong(this.song.id);
    }); 
  }

  clickVoteUp() {
    this.dataService.recordVote(this.song.id);
  }
}
