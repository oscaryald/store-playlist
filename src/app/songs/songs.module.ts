import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SongsFavoritesComponent } from './components/songs-favorites/songs-favorites.component';
import { SongsPlaylistComponent } from './components/songs-playlist/songs-playlist.component';
import { SongsPlayedComponent } from './components/songs-played/songs-played.component';
import { SongsService } from './services/songs.service';
import { SongsListComponent } from './components/songs-list/songs-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [SongsFavoritesComponent, SongsPlaylistComponent, SongsPlayedComponent, SongsListComponent],
  exports: [SongsFavoritesComponent, SongsPlaylistComponent, SongsPlayedComponent],
  providers: [SongsService]
})
export class SongsModule { }
