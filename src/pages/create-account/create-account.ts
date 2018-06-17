import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider) {
    this.model = new User();
    this.model.name = 'Rodrigo';
    this.model.lastName = 'Varela';
    this.model.phone = 49999555789;
    this.model.cpf = '430.422.290-25';
    this.model.nationalHealthCard = 282019128640001;
    this.model.cbo = '2251-25';
    this.model.email = 'rodrigo@gmail.com';
    this.model.password = 'teste';
    this.model.repeatPassword = 'teste';
    }

  createAccount() {
    this.userProvider.createAccount(this.model.email, this.model.password)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário criado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();

      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao criar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }
}

export class User {
  name: string;
  lastName: string;
  phone: number;
  cpf: string;
  nationalHealthCard: number;
  cbo: string;
  email: string;
  password: string;
  repeatPassword: string;

}