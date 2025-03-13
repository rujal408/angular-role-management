import { Component } from '@angular/core';
import { RoleListComponent } from './role-list/role-list.component';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrl: './role.component.scss',
  imports: [RoleListComponent], // Import components here
})
export class RoleComponent {}
