import { Component, ViewChild, ViewChildren } from '@angular/core';
import { SongComponent } from '../song/song.component';
import { SongInterface } from '../data/SongInterface';
import { NgStyle } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-song-list',
  imports: [SongComponent, NgStyle],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})
export class SongListComponent {

  constructor(public dataService: DataService) {

  }

  
  @ViewChildren(SongComponent)
  songComponents! : SongComponent[];

  ulStyle = {
    'list-style-type': 'none',
    padding: '0'
  };

}
