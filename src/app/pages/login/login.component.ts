import { Component, OnInit } from '@angular/core';
import { InputTextModule} from 'primeng/inputtext'
import {ButtonModule} from 'primeng/button';
import { FormControl } from '@angular/forms';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl("");
  password = new FormControl("");

  

  constructor(private userService:UserService) { 
    
  }
  
  ngOnInit(): void {
  }
  login(){
    this.userService.login(this.username.value, this.password.value)
    .subscribe( response => {
      if(response){
        console.log(response)
      }
      
    })
  }
}
