import { Component, OnInit } from '@angular/core';

import { ErrorStateMatcher } from '@angular/material/core';
import { UserService as service} from '../service/user-data.service';
import { FormControl, Validators, NgForm, FormGroupDirective, AbstractControl, FormGroup, FormBuilder } from '@angular/forms';


export class MyErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted =form && form.submitted;
      return !!(control && control.invalid && control.dirty || control?.touched);
  }
}

@Component({
  selector: 'app-pop-up-products',
  templateUrl: './pop-up-products.component.html',
  styleUrls: ['./pop-up-products.component.css']
})
export class PopUpProductsComponent implements OnInit {
  
  form!:FormGroup;
  data:any;

  constructor(
    private formBuilder:FormBuilder,
    private userPost: service
  ) { }

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      name:[],
      code:[], //
      price:[],
      user_id:[],
    })
  }

 
  saveProduct(){
    this.data = this.form.value;

    this.userPost.createProduct(this.data).subscribe((data) => {
      console.log(data)
    })

  }
}
