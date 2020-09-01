import { Component, OnInit } from '@angular/core';
import {ApiRequestService}from '../service-request/api-request.service';

@Component({
  selector: 'app-git-display',
  templateUrl: './git-display.component.html',
  styleUrls: ['./git-display.component.css']
})
export class GitDisplayComponent implements OnInit {

  constructor(private apirequestService:ApiRequestService ) { }

  ngOnInit() {
    this.apirequestService
  }

}
