import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreateUserInterface } from "src/interfaces/user-interface";

@Injectable({
    providedIn: "root"
})
export class UserRepositoryService {

    private url: string = "http://localhost:3000/api/users";
    constructor(private _httpService: HttpClient){}

    createUser<T>(userData: CreateUserInterface): Observable<T> {
        return this._httpService.post(`${this.url}/create-users`, userData) as Observable<T>;
    }
    
}