import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './pages/create/createUser.component';
import { FindUserComponent } from './pages/find/findUser.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'create', component: CreateUserComponent },
      { path: 'find', component: FindUserComponent },
      { path: 'edit/:id', component: CreateUserComponent },
      { path: '', redirectTo: 'find' },
    ],
  },
  {
    path: '**',
    redirectTo: 'create',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
