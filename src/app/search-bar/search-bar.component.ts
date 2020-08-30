import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user-class/user';
import {Repository} from '../repository-class/repository';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  user:User;
  repository:Repository;

  constructor(private http:HttpClient) { 

  }

  ngOnInit() {
    interface ApiResponse{
     user:string;
     repository:string; 
    }

    this.http.get<ApiResponse>(" 'https://api.github.com/users/daneden?03fec474368a1b5cd7c7e402f1f2ad0ac0d06fe0' ").subscribe(data=>{
      this.user=new User(data.user)
      this.repository=new Repository(data.repository)
    })

  }
}