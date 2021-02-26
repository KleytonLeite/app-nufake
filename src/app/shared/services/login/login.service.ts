import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { LoginCredentials, LoginResponse } from '../../interfaces/login.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    ) {}

  login(credentials: LoginCredentials): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.API_URL + '/login', credentials)
      .pipe(
        tap(response => {
          this.authService.setUser(response.usuario);
          this.authService.setToken(response.token);
        })
      );
  }
}


