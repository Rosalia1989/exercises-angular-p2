import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

  @Input() user!:User;
  
  @Output()deletedUser = new EventEmitter<User>();
  @Output()selectedUser = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(value:User):void {
    this.deletedUser.emit(value);
  }

  selectUser(value:User):void {
    this.selectedUser.emit(value);
  }

}
