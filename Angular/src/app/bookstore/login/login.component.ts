import { Component, OnInit } from '@angular/core';
import { CustomerRepository } from 'src/app/model/customer.repository';
import { Customer } from 'src/app/model/customer.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  password: string="";
  usern: string="";
  
  actor: string="";
  submitted: boolean=false
  
  
  public check2: String;
  public check1:string;
  public check:String;
  msg:string="";
  constructor(public repo: CustomerRepository,public customer: Customer,private router : Router){}
  submitLogin(f:NgForm){
    if(f.valid){
      if(this.repo.getByCustomerUsername(this.customer.username)!=undefined){
        
        this.check1 = (this.repo.getByCustomerUsername(this.customer.username)).actor;
        this.check2=(this.repo.getByCustomerUsername(this.customer.username)).username;
        this.check = (this.repo.getByCustomerUsername(this.customer.username)).password;  
        console.log(this.repo.getByCustomerUsername(this.customer.username));
        
        if(this.check === this.customer.password){
          
          sessionStorage.setItem("name",this.customer.username);
          if(this.customer.username === this.check2){
            if(this.check1=="admin" ){
              sessionStorage.setItem("actor","admin");
              this.router.navigate(['/admin-index']);
            }
            else if (this.check1==="customer"||this.check1==="member"){
              sessionStorage.setItem("actor",this.check1);
              this.router.navigate(['/customer-index']);
            }
          }else{
            alert("username mismatch!!");
          }
          }else{
            this.msg="Please enter valid credentials!!"
          }
      }
      else{ 
        this.msg="Please enter valid credentials!!"
      }
   }
   console.log(sessionStorage.getItem("actor"));
  }

  ngOnInit() {
  }

}
