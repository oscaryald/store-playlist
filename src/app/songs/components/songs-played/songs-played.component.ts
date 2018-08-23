import { Component, OnInit } from '@angular/core';
import { Store } from '../../../store';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-songs-played',
  templateUrl: './songs-played.component.html',
  styleUrls: ['./songs-played.component.css']
})
export class SongsPlayedComponent implements OnInit {

  played$: Observable<any[]>;

  constructor(
    private store: Store,
    private songsService: SongsService,
  ) { }

  ngOnInit() {
    this.played$ = this.store.select('playlist')
        .pipe(filter(Boolean))
        .pipe(map(playlist => playlist.filter(track => track.listened)));
  }

  onToggle(event) {
    this.songsService.toggle(event)
  }

}
