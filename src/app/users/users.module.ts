import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from './users/list-users/list-users.component';

@NgModule({
  declarations: [
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [ListUsersComponent]
})
export class UsersModule { }
