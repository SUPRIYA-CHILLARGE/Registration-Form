import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myRegForm : FormGroup | any;
 
  get userNewContact(){
    return this.myRegForm.get('userContEmail.userContact')
  }

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myRegForm = new FormGroup({
      fullName : new FormGroup({
        firstName : new FormControl('', Validators.required),
        lastName : new FormControl('', Validators.required),
      }),
      userContEmail : new FormGroup({
        userEmail : new FormControl('', Validators.required),
        userContact : new  FormControl('',[ Validators.required, Validators.minLength(10)] ),
      }),
      userLogin : new FormGroup({
        userName : new  FormControl('', Validators.required ),
        userPassword : new  FormControl('', Validators.required ),
     })
    })

  }


  onSubmit(){
    console.log(this.myRegForm.value, `this registration form is submitted`);    
    // this.myRegForm.reset();
  }

  updateProfile(){
    this.myRegForm.setValue({
      fullName :{
        firstName : "Supriya",
        lastName : "Chillarge"
      },
      userContEmail :{
        userEmail : "abcd@gmail.com",
        userContact : "9090909090"
      },
      userLogin :{
        userName : "ABCD",
        userPassword : "1234"
      }
    })
  }
  }


