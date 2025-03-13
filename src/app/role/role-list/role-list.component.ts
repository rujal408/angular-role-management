import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
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

  roles = [
    { id: 1, name: 'Admin', permissions: ['manage_users', 'manage_settings'] },
    { id: 2, name: 'Editor', permissions: ['edit_content'] },
    { id: 3, name: 'Viewer', permissions: ['view_content'] },
  ];

  onEdit(id: number) {
    this.edit.emit(id);
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }

  addRole(newRoleData: { name: string; permissions: string[] }) {
    // Generate a new ID (max existing ID + 1)
    const newId =
      this.roles.length > 0
        ? Math.max(...this.roles.map((role) => role.id)) + 1
        : 1;

    // Add the new role to the array
    this.roles.push({
      id: newId,
      name: newRoleData.name,
      permissions: newRoleData.permissions,
    });
  }
}
