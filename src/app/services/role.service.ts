import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private rolesSignal = signal<any[]>([]);
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/roles';

  getRoles = this.rolesSignal.asReadonly();

  constructor() {
    this.http.get<any[]>(this.url).subscribe((roles) => {
      console.log({ roles });
      this.rolesSignal.set(roles);
    });
  }

  async postRole(newRole: any): Promise<void> {
    this.http
      .post<any>(this.url, newRole)
      .pipe(
        tap(() => {
          // Refetch after successful post
          this.http.get<any[]>(this.url).subscribe((roles) => {
            this.rolesSignal.set(roles);
          });
        })
      )
      .subscribe();
  }
}
