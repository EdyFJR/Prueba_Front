import { Component, OnInit } from '@angular/core';
import { LoginService, User } from '../services/login.service';
import { ModalController } from '@ionic/angular';
import { EditarPage } from '../editar/editar.page';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  userInfo: User[] = [];

  constructor(private loginService: LoginService, private modalController: ModalController, private conectionService: ConnectionService) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.conectionService.GET_BY_USER().subscribe(
      (data: User[]) => {
        this.userInfo = data;
      },
      (error) => {
        console.log('Error al obtener datos:', error);
      }
    )
  }

  async openEditUserModal(userId: string) {
    const modal = await this.modalController.create({
      component: EditarPage,
      componentProps: {
        userId: userId
      }
    });
    return await modal.present();
  }

  deleteUser(userId: string) {
    // Muestra una confirmación antes de eliminar
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.loginService.deleteUser(userId).subscribe(
        (data) => {
          console.log('Usuario eliminado correctamente:', data);
          // Actualiza la lista de usuarios después de eliminar
          this.getUserData();
        },
        (error) => {
          console.log('Error al eliminar usuario:', error);
        }
      );
    }
  }
}