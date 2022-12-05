import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform!:FormGroup;

  constructor(private fb:FormBuilder, private authservice:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.loginform=this.fb.nonNullable.group({
      'username':['',Validators.required],
      'pwd':['',Validators.required]
    })
  }
onSubmit(){
  this.authservice.login(this.loginform.value['username'],this.loginform.value['pwd'])
  .subscribe(users=>{
    if(users.length==0){
      alert("echec d'authentification");
      this.loginform.reset(); 
    this.authservice.success=false;   } 
    else {
      this.router.navigate(['admin/dashboard']);
      this.authservice.success=true;
    }
  })
}


}
