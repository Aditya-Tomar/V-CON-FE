import { Component } from '@angular/core';
import { HeaderInterface } from 'src/interfaces/header-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'V-CON-FE';

  public headerData: HeaderInterface[] = [
    {
      value: "Profile",
      url: "/profile",
      badgeCount: 0,
      showBadge: false,
    },
    {
      value: "Video Converter",
      url: "/converter",
      badgeCount: 0,
      showBadge: false,
    },
    {
      value: "About Us",
      url: "/about",
      badgeCount: 0,
      showBadge: false,
    }
  ];
}
