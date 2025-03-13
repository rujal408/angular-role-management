import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  inject,
  Output,
  Signal,
} from '@angular/core';
import { RoleService } from '../../services/role.service';
import { RoleFormComponent } from '../role-form/role-form.component';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
  imports: [CommonModule, RoleFormComponent],
})
export class RoleListComponent {
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  private readonly rolesServie = inject(RoleService);

  public roles: Signal<any[]>;

  constructor() {
    const resources = this.rolesServie.getRoles;
    this.roles = computed(() => resources.value() || []);
  }

  onEdit(id: number) {
    this.edit.emit(id);
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }

  addRole(newRoleData: { name: string; permissions: string[] }) {
    // Generate a new ID (max existing ID + 1)
    // const newId =
    //   this.roles.length > 0
    //     ? Math.max(...this.roles.map((role) => role.id)) + 1
    //     : 1;
    // // Add the new role to the array
    // this.roles.push({
    //   id: newId,
    //   name: newRoleData.name,
    //   permissions: newRoleData.permissions,
    // });
  }
}
