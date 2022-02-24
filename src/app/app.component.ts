import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopUpComponent} from './pop-up/pop-up.component';
import { UserService as service } from './service/user-data.service';
import { Users} from './interfaces/users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'front';
  
  users:Users[];
  displayedColumns=['id','name','cpf'];

  constructor(private dialogRef: MatDialog, private api:service){
  }

  ngOnInit(){
    this.getUsers();

  }

  getUsers(){
    this.api.listUsers()
    .subscribe(data => {
      
      this.users=data;
      console.log(this.users);
    });
  }


  openDialog(){
    this.dialogRef.open(PopUpComponent);
  }
}
