import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  userform: FormGroup;
  constructor(private _loginService: LoginService, private _router: Router, private _messageService: MessageService) { }
  ngOnInit(): void {
    this.userform = new FormGroup(
      {
        username: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required])
      }
    )
  }
  loginForm() {
    if (!this.userform.invalid) {
      this._loginService.login(this.userform.value).subscribe({
        next: (response: any) => {
          if (response) {
            console.log(response, "rsponse");
            alert
            this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Login' });
            localStorage.setItem('userid', response.userid)
            localStorage.setItem('role_permission', response.role_permission);
            localStorage.setItem('role', response.role);
            localStorage.setItem('token', response.token);
            setTimeout(() => {
              this._router.navigate(['layout']);
            }, 2000);
          }
        },
        error: (error: any) => {
          this._messageService.add({ severity: 'error', summary: 'Failed', detail: 'Wrong Username or Password' });

        }

      });

    }
    else {
      return;
    }
  }
}
