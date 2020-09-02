import { Component, OnInit } from '@angular/core';
import {ApiRequestService}from '../service-request/api-request.service';
import { Repository } from '../repository-class/repository';
import { User } from '../user-class/user';
import { from } from 'rxjs';

@Component({
  selector: 'app-git-display',
  templateUrl: './git-display.component.html',
  styleUrls: ['./git-display.component.css']
})
export class GitDisplayComponent implements OnInit {
    user:User[]
  constructor(private apirequestService:ApiRequestService ) { }

    getSearchUser(searchUser){
      this.apirequestService.userRequest(searchUser).then(
        (success) =>{
          this.user = this.apirequestService.user
          console.log(this.user)
        },
        (error)=>{
          console.log(error);
          
        }
        );
    }

  ngOnInit() {
    this.getSearchUser('ibukamshindi');
  }

}
