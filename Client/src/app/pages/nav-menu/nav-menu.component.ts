import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalModule} from '../../components/modal/modal.module';
import {RegistrationComponent} from '../client/registration/registration.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

}
