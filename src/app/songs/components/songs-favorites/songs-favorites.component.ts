import { Component, OnInit } from '@angular/core';
import { Store } from '../../../store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-songs-favorites',
  templateUrl: './songs-favorites.component.html',
  styleUrls: ['./songs-favorites.component.css']
})
export class SongsFavoritesComponent implements OnInit {

  favourites$: Observable<any[]>;

  constructor(
    private store: Store,
    private songsService: SongsService,
  ) { }

  ngOnInit() {
    this.favourites$ = this.store.select('playlist')
                              .pipe(filter(Boolean))
                              .pipe(map(playlist => playlist.filter(track => track.favourite)));
  }

  onToggle(event) {
    this.songsService.toggle(event)
  }

}
