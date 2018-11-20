import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('collapsible') elCollapsible: ElementRef;
  @ViewChild('sidenav') sidenav: ElementRef;

  ngAfterViewInit() {
    const instanceCollapsible = new M.Collapsible(this.elCollapsible.nativeElement, {});
    const instanceSideNav = new M.Sidenav(this.sidenav.nativeElement, {});
  }
}
