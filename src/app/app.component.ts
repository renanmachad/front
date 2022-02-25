import { Component, NgModule, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopUpComponent} from './pop-up/pop-up.component';
import { EditComponent } from './edit/edit.component';
import { PopUpProductsComponent } from './pop-up-products/pop-up-products.component';
import { ModalProductComponent } from './modal-product/modal-product.component';
import { UserService as service } from './service/user-data.service';
import { Users} from './interfaces/users';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
 
  title = 'front';
  
  users:Users[];
  displayedColumns=['id','name','cpf','uf','action','delete','viewProduct',];

  constructor(private dialogRef: MatDialog, private api:service){
  }

  ngOnInit(){
    this.getUsers();

  }

  
  
  viewProduct(row:any){
    this.dialogRef.open(ModalProductComponent,{
      data:row
    })
  }



  getUsers(){
    this.api.listUsers()
    .subscribe(data => {
      
      this.users=data;
      console.log(this.users);
    });
  }

  deleteUsers(user:any){
      this.api.delete(user.id).subscribe(data => {
        console.log(data)
      })
  }

  editUser(user:any) {
    this.dialogRef.open(EditComponent,{
      data:user
    });
    console.log(user);
  }
  OpenProductUser(){
    
  }

  OpenProduct(){
    this.dialogRef.open(PopUpProductsComponent);
  }

  openDialog(){
    this.dialogRef.open(PopUpComponent);
  }
}
