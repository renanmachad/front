import { UserService } from './../service/user-data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm, FormGroupDirective, AbstractControl, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient} from '@angular/common/http';
import { UserService as service } from '../service/user-data.service';
export class MyErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted =form && form.submitted;
      return !!(control && control.invalid && control.dirty || control?.touched || isSubmitted);
  }
}

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
})
export class PopUpComponent implements OnInit {

  form !: FormGroup;
  data:any;

  constructor(private formBuilder: FormBuilder, private userPost: service) {
   
  }


  
  ngOnInit() {
    this.form= this.formBuilder.group({
      name: ['',Validators.required],
      phone: ['',Validators.required],
      cpf:['',Validators.required],
      uf:['', Validators.maxLength(2)],
      city: [''],
      street: [''],
      cep:[''],
      complement: [''],
      products_id: [''],
    });
  }

  saveUser(){
    
    this.data = this.form.value;

    this.userPost.createUser(this.data).subscribe((data: any)=> {
      console.warn(data);
    })
    console.log(this.form.value);
  }

}
