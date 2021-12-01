import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/interfaces';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input()users!:User[];

  @Output()selectedUser= new EventEmitter<User>();
  
  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(value:User): void {
    this.users.splice(this.users.indexOf(value), 1);
  }
}
