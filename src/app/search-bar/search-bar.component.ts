import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {ApiRequestService} from '../service-request/api-request.service';
import { from } from 'rxjs';
import { User } from '../user-class/user';
import { Repository } from '../repository-class/repository';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  user:User;
  repository:Repository;

  constructor(private userService:ApiRequestService) {  }

  ngOnInit() {
    this.userService.userRequest()
    this.user = this.userService.user
    this.userService.userRequest()
    this.repository = this.userService.repository
  }
}
