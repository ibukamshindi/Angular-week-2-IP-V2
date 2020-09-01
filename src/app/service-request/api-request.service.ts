import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../user-class/user'
import {Repository} from '../repository-class/repository'

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  user:User;
  repository:Repository;
  get: any;


  constructor(private http: HttpClient) { 
    this.user = new User ("")
    this.repository = new Repository ("")
  }
  userRequest(){
    interface ApiResponse{
      login:string
      repos_url:string
    }
    let promise = new Promise ((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users+environment.gitApiKey').toPromise().then(response=>{
        this.user.login = response.login
        this.repository.repos_url= response.repos_url

        resolve()

      },
      error=>{
        this.user.login = "oops"
        this.repository.repos_url = "oops"

        reject(error)
      
      })
    })
    return promise
  }

}
