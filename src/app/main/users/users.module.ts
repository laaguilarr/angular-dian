import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FindUserComponent } from './pages/find/findUser.component';
import { CreateUserComponent } from './pages/create/createUser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DeleteUserComponent } from './components/delete/deleteUser.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [FindUserComponent, CreateUserComponent, DeleteUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MatTableModule 
  ],
})
export class UsersModule {}
