import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { CreateUserInterface } from "src/interfaces/user-interface";
import { UserRepositoryService } from "src/repository/user-repository";

@Injectable({
    providedIn:"root"
})
export class UserService {

    public $createUserData = new BehaviorSubject(false);
    constructor(private _createUserRepository: UserRepositoryService){}

    createUser(userData: CreateUserInterface): void {
        this._createUserRepository.createUser<boolean>(userData).subscribe((res: boolean) => {
            this.$createUserData.next(res);
        });
    }

    login(): Observable<boolean> {
        return of(true);
    }

    getUserInfo(): Observable<any>{
      return of({count: 10});
    }
}