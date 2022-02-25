import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../interfaces/users';
import { Product } from '../interfaces/products';
@Injectable({
    providedIn: 'root',
})

export class UserService {
    register_user = 'http://127.0.0.1:8000/api/users/register';
    readonly list_users = 'http://127.0.0.1:8000/api/users/'
    update_user = 'http://127.0.0.1:8000/api/users/update/';
    register_product='http://127.0.0.1:8000/api/products/register/';

    user: any;
    constructor( private http: HttpClient){}
    //Lista usuário
    users(){
        return this.http.get(this.register_user);
    }
    //Cria usuário
    createUser(data:any){
        return this.http.post(this.register_user,data);
    }
    //Cria produto
    createProduct(data:any){
        return this.http.post(this.register_product,data);
    }

    //Lista usuários
    listUsers(){
        return this.http.get<Users[]>(this.list_users);
    }

    listUsersWithProduct(id:any){
        return this.http.get<Product[]>(`http://127.0.0.1:8000/api/users/${id}`)
    }

    //Edita usuários
    editUser(data:any,id:any){
        const httpOptions ={ headers:new HttpHeaders({'Content-Type': 'application/json'})};
        return this.http.put(`http://127.0.0.1:8000/api/users/update/${id}`,data,httpOptions);
    }
    //Deleta usuários
    delete(id: any){
        return this.http.delete(`http://127.0.0.1:8000/api/users/delete/${id}`)
    }
}