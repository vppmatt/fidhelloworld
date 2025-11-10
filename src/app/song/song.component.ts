import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SongInterface } from '../data/SongInterface';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-song',
  imports: [NgStyle],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css'
})
export class SongComponent {
  @Input({required: true}) song!: SongInterface;

  @Output()
  voteUp = new EventEmitter<number>();

  @Input() isTopSong: boolean = false;



  clickVoteUp() {
    this.voteUp.emit(this.song.id);
  }
}
