import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GripMaster - Garantia';
  showMenu: boolean = false;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.onRouteChange();
  }

  onRouteChange() {
    this.router.events.pipe(
      filter((e): e is RouterEvent => e instanceof RouterEvent)
    ).subscribe((e: RouterEvent) => {
      const url = this.router.url;
      console.log(url);
      if (url == '/login') {
        this.showMenu = false;
      } else {
        this.showMenu = true;
      }
    })
  }

}
