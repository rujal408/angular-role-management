import { Routes } from '@angular/router';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'role', component: RoleComponent },
];
