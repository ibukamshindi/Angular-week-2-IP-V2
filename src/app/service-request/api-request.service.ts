import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../user-class/user'
import {Repository} from '../repository-class/repository'

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  user:User []= [];
  repository:Repository;


  constructor(private http: HttpClient) { 
    // this.user = new User ("",0,"","");
    
  }
  userRequest(searchUser:string){
    interface ApiResponse{
      login:string,
      avatar_url: string,
      html_url: string,
      
    }
    return new Promise ((resolve,reject)=>{
      this.user = [];
      this.http.get<ApiResponse>(environment.apiUrl+searchUser+environment.gitApiKey).toPromise().then((results)=>{
        this.user.push(results);

        resolve();

      },
      error=>{
        reject(console.log('error'));
      }
      );

    });
    
  }

}
