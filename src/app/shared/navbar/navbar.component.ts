import { ChangeDetectionStrategy, Component, OnInit, HostListener } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { NbSidebarService } from '@nebular/theme';
import { aboutme} from '../../constant/aboutme';
import { ClickOutsideModule } from 'ng-click-outside';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public innerWidth: any;
  collapsed: boolean;
  avatar = aboutme.avatar;
  link = aboutme.gmailpdf;

  items = [
    {
      title: 'Inicio',
      icon: 'hash-outline',
      link: '/',
    },
    {
      title: 'Curriculum Vitae',
      icon: 'file-outline',
      link: '/cv',
    },
    /*{
      title: 'ChatBot',
      icon: { icon: 'message-square-outline', pack: 'eva' },
      link: '/Chat',
    },*/
    {
      title: 'Contacto',
      icon: 'email-outline',
      link: '/Contacto',
    },
  ];

  constructor(private sidebarService: NbSidebarService) {
    this.collapsed = false;
  }

  toggle() {
    this.sidebarService.toggle(true);

    if (this.collapsed) {
      this.collapsed = false;
    } else {
      this.collapsed = true;
    }

    this.innerWidth = window.innerWidth;

    if (this.innerWidth < 850) {
       if (this.collapsed) {
      this.collapsed = false;
    } else {
      this.collapsed = true;
    }
    } else {

    }
    return false;
  }


  ngOnInit() {

    this.innerWidth = window.innerWidth;
    // console.log(this.innerWidth);
    if (this.innerWidth < 1200) {
      this.collapsed = true;
    }
}

onClickedOutside(e: Event) {
  // tslint:disable-next-line: no-string-literal
  console.log( e[ 'screenY' ] );
    // tslint:disable-next-line: no-string-literal
  if (!this.collapsed && !( e['screenX'] > 19 && e['screenX'] < 40 && e['screenY'] > 128 && e['screenY'] < 151) ) {
    this.sidebarService.toggle(true);
    this.collapsed = true;
    }

}

}
