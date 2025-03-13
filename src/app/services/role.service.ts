import { Injectable, resource, ResourceRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  public getRoles: ResourceRef<any[]>;
  private url = 'http://localhost:3000/roles';

  constructor() {
    this.getRoles = resource({
      loader: () => {
        return fetch(this.url).then(async (res) => {
          const response = await res.json();
          return response;
        });
      },
    });
  }

  async postRole(newRole: any): Promise<void> {
    await fetch('http://localhost:3000/roles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRole),
    });

    // Invalidate the resource to force a reload next time it's accessed
  }
}
