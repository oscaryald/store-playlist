import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongsListComponent implements OnInit {

  @Input()
  list;

  @Output()
  toggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleItem(index: number, prop: string) {
    const track = this.list[index];
    this.toggle.emit({
      track: {
        ...track, [prop]: !track[prop]
      }
    });
  }

}
