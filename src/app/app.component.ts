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
  

  constructor(private dialogRef: MatDialog, private api:service){
  }

  ngOnInit(){
    this.api.listUsers()
    .subscribe(name =>this.users=name);
    console.log(this.users);
  }
  openDialog(){
    this.dialogRef.open(PopUpComponent);
  }
}
