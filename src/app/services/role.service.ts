import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Permissions, Role } from '../models/role';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private roles: Role[] = [
    { id: 1, name: 'Admin', permissions: Object.values(Permissions) },
    {
      id: 2,
      name: 'Editor',
      permissions: [Permissions.READ, Permissions.WRITE],
    },
  ];

  getRoles(): Observable<Role[]> {
    return of(this.roles);
  }

  createRole(role: Role): Observable<Role> {
    role.id = this.roles.length + 1;
    this.roles.push(role);
    return of(role);
  }

  getPermissions(): Observable<string[]> {
    return of(Object.values(Permissions));
  }
}
