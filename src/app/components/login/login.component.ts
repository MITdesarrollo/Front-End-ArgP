import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
  datos!: Usuario[];

  formulario!: FormGroup;
  id!: number;

  constructor(private userService: UsuarioService, private router: Router) {
    this.formulario = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    
  }
  onLogin() {
    let userEmail = this.formulario.value.email;
    let userPassword = this.formulario.value.password;
      this.userService.lista().subscribe((data) => {
        const encontrarUser = data.find((el) => el.email == userEmail);
        if (encontrarUser != undefined) {
          if (encontrarUser?.password == userPassword) {
            this.userService.login(
              encontrarUser.email
            );
            localStorage.setItem('sesion', JSON.stringify(encontrarUser.email));
            this.router.navigate(['home']);
          } else {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'contraseña incorrecta',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'usuario icorrecto',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  }


   



/* this.userService.lista().subscribe(data=>{
  if(data[0].email == userEmail && data[0].password == userPassword) */
