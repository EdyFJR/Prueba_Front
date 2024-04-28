import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { LoginService, UserCreate } from '../services/login.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  userCreate: UserCreate = {
    clave: '',
    matricula:'',
    paterno:'',
    materno:'',
    nombre:'',

  }
  constructor(private loginService: LoginService, private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.createUser(this.userCreate).subscribe(
      (response) => {
        this.presentToast('Usuario registrado exitosamente');
        this.router.navigateByUrl('/home');
      },
      (err) => {
        this.presentErrorToast('Error al registrar el estudiante. Intente de nuevo');
        console.log(err);
      }
    );
  }
  

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  private async presentErrorToast(message: string) {
    const toastError = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
      color: 'danger',
    });
    toastError.present();
  }

}

