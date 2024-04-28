import { Component, OnInit } from '@angular/core';
import { LoginService, Usuario } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: Usuario = {
    nombre: '',
    password: '',
  };

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion() {
    this.loginService.iniciarSesion(this.usuario).subscribe(
      (response) => {
        console.log('Server response: ', response);
        this.goToHome();
      }, (err) => {
        console.log('Error logging in: ', err);
      }
    )
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }
  gotoRegister() {
    this.router.navigateByUrl('/registrar');
  }
} 

  
