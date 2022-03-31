import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  backend_url = environment.backendServer
  backend_port = environment.backendPort
  login(username: string, password: string){
    return this.http.post(`${this.backend_url}:${this.backend_port}/api/v1/login`, {username, password})
  }
}
