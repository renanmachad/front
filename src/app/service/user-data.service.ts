import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/users';
@Injectable({
    providedIn: 'root',
})

export class UserService {
    register_user = 'http://127.0.0.1:8000/api/users/register';
    readonly list_users = 'http://127.0.0.1:8000/api/users/'
    user: any;
    constructor( private http: HttpClient){}

    users(){
        return this.http.get(this.register_user);
    }

    createUser(data:any){
        return this.http.post(this.register_user,data);
    }
    
    listUsers(){
        return this.http.get<Users[]>(this.list_users);
    }
}