import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from './../../providers/users/users';





@IonicPage()
@Component({
  selector: 'page-user-create',
  templateUrl: 'user-create.html',
})
export class UserCreatePage {
    model: Patient;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.model = new Patient();
    this.model.name = 'Paciente1';
    this.model.lastName = 'Paciente1';
    this.model.phone = 49999555555;
    this.model.cpf = '430.422.290-25';
    this.model.nationalHealthCard = 282019128640001;
    this.model.email = 'paciente@teste.com.br';
    this.model.password = '123';
    
  }

 

}

export class Patient{
  name: string;
  lastName: string;
  phone: number;
  cpf: string;
  nationalHealthCard: number; 
  email: string;
  password: string;
}
