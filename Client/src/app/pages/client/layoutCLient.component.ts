import {Component, OnInit, ViewChild} from '@angular/core';
import {RegistrationComponent} from './registration/registration.component';
import {Registration2Component} from './registrationOnReactioveForm/registration2.component';

@Component({
  selector: 'app-layout-client',
  templateUrl: './layoutClient.component.html',
  styleUrls: ['./layoutClient.component.scss']
})
export class LayoutClientComponent implements OnInit {
  @ViewChild(RegistrationComponent, null) registrationComponent: RegistrationComponent;
  @ViewChild(RegistrationComponent, null) registrationComponent2: Registration2Component;

  ngOnInit() { }

  openModalEmployee(id: string) {
    this.registrationComponent.openModal(id);
  }
  openModalEmployee2(id: string) {
    this.registrationComponent2.openModal(id);
  }
}
