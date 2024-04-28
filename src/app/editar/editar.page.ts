import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { LoginService, User } from '../services/login.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  @Input() userId!: string; // Agrega el signo de exclamación para indicar que userId será inicializado
  userInfo: User = {
    id: '', // Si userId es el único valor que recibes, podrías inicializar solo esta propiedad
    nombre: '',
    materno: '',
    paterno: '',
    password: '',
    clave: '',
    matricula: '',
  };

  constructor(
    private modalController: ModalController,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    // Verifica que userId esté definido antes de asignarlo a userInfo.id
    if (this.userId) {
      this.userInfo.id = this.userId;
    } else {
      console.error('userId no está definido');
      this.dismissModal(); // Cierra el modal si userId no está definido
    }
  }

  onSubmit() {
// Puedes usar esto
this.loginService.editUser(this.userInfo, this.userId).subscribe({
  next: (response) => {
    console.log('Usuario editado correctamente');
    this.dismissModal();
    console.log(response);
  },
  error: (error) => {
    console.error('Error al editar usuario:', error);
  }
});
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
