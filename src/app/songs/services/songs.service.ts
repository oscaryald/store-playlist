import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../../store';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class SongsService {

  baseUrl = 'http://localhost:3004/';
  getPlaylist$ = this.http.get(`${this.baseUrl}playlist`)
                          .pipe(map(res => res))
                          .pipe(tap(next => this.store.set('playlist', next)));

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

  toggle(event: any) {
    this.http.put(`${this.baseUrl}playlist/${event.track.id}`, event.track)
                          .pipe(map(res => res))
                          .subscribe(track => {
                            const value = this.store.value.playlist;
                            const playlist = value.map(song => {
                              if (event.track.id === song.id) {
                                return {
                                  ...song,
                                  ...event.track
                                };
                              } else {
                                return song;
                              }
                            });
                            this.store.set('playlist', playlist);
                          });
  }



}
