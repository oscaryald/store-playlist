import { Component, OnInit } from '@angular/core';
import { Store } from '../../../store';
import { SongsService } from '../../services/songs.service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-songs-playlist',
  templateUrl: './songs-playlist.component.html',
  styleUrls: ['./songs-playlist.component.css']
})
export class SongsPlaylistComponent implements OnInit {

  playlist$: Observable<any[]>;

  constructor(
    private store: Store,
    private songsService: SongsService,
  ) { }

  ngOnInit() {
    this.songsService.getPlaylist$.subscribe();
    this.playlist$ = this.store.select('playlist');
  }

  onToggle(event) {
    this.songsService.toggle(event)
  }

}
