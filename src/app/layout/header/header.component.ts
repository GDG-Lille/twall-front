import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('easeIn', [
      transition(
        ':enter',
        [
          style({opacity: 0}),
          animate('500ms ease-in', style({opacity: 1}))
        ])
    ])
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {

  public isChti: Boolean;
  private _timer: NodeJS.Timer;

  constructor() { }

  ngOnInit(): void {
    this.toggleLang();
  }

  ngOnDestroy(): void {
    clearTimeout(this._timer);
  }

  private toggleLang(): void {
    this.isChti = !this.isChti;
    this._timer = setTimeout(() => this.toggleLang(), 10000);
  }

}
