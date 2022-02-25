import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm, FormGroupDirective, AbstractControl, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient} from '@angular/common/http';
import { UserService as service } from '../service/user-data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export class MyErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted =form && form.submitted;
    return !!(control && control.invalid && control.dirty || control?.touched || isSubmitted);
  }
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  form!:FormGroup;
  data:any;

  constructor(
  private formBuilder:FormBuilder, 
  private UserEdit:service,
  @Inject(MAT_DIALOG_DATA) public editData:any
  ) { }

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      name:[this.editData.name],
      phone: [this.editData.phone],
      cpf:[this.editData.cpf],
      uf:[this.editData.uf,Validators.maxLength(2)],
      city: [this.editData.city],
      street: [this.editData.street],
      cep:[this.editData.cep],
      complement: [this.editData.complement],
      products_id:[this.editData.products_id]
    });
    console.log(this.editData);
  }

  
  editUser(){
    if(this.form.valid){
      this.data= this.form.value;
      

      this.UserEdit.editUser(this.data,this.editData.id).subscribe((data:any) => {
        console.log(data);
      });
      console.log(this.form.value);
    }
    
  }

}
