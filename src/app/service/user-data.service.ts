import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class UserService {
    url = 'http://127.0.0.1:8000/api/users/register';
    user: any;
    constructor( private http: HttpClient){}

    users(){
        return this.http.get(this.url);
    }
    createUser(data:any){
        return this.http.post(this.url,data);
    }
}