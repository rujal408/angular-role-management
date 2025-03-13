import { Injectable, resource, ResourceRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  public getRoles: ResourceRef<any[]>;

  constructor() {
    this.getRoles = resource({
      loader: () => {
        return fetch('http://localhost:3000/roles').then(async (res) => {
          const response = await res.json();
          return response.data;
        });
      },
    });
  }
}
