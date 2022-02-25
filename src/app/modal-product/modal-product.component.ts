import { Component,Inject, OnInit } from '@angular/core';
import { UserService as service } from '../service/user-data.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.css']
})
export class ModalProductComponent implements OnInit {

  data:any;

  displayedColumns=['name','price','code']
  constructor(
    private api:service,
    @Inject(MAT_DIALOG_DATA) public Data:any
  ){
   
   }

  ngOnInit(): void{
    this.api.listUsersWithProduct(this.Data.id).subscribe((data:any) =>
    {
      this.data=data;
      console.log(data);
    })
  }

}
