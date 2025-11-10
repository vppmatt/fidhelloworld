import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SongInterface } from '../data/SongInterface';

@Component({
  selector: 'app-song',
  imports: [],
  templateUrl: './song.component.html',
  styleUrl: './song.component.css'
})
export class SongComponent {
  @Input({required: true}) song!: SongInterface;

  @Output()
  voteUp = new EventEmitter<number>();

  clickVoteUp() {
    this.voteUp.emit(this.song.id);
  }
}
