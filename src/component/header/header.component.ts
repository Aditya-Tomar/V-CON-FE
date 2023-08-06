import { Component, Input } from '@angular/core';
import { HeaderInterface } from 'src/interfaces/header-interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() public headerData!: HeaderInterface[];

}
