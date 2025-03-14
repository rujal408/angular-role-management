import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class RoleFormComponent {
  @ViewChild('roleModal') roleModal!: ElementRef;
  @Output() roleSubmitted = new EventEmitter<{
    name: string;
    permissions: string[];
  }>();

  availablePermissions = [
    'manage_users',
    'edit_content',
    'view_content',
    'manage_settings',
    'delete_content',
  ];

  roleForm = new FormGroup({
    name: new FormControl(''),
    permissions: new FormControl<string[]>([]),
  });

  togglePermission(permission: string, isChecked: boolean) {
    const currentPermissions = this.roleForm.value.permissions || [];
    const updatedPermissions = isChecked
      ? [...currentPermissions, permission]
      : currentPermissions.filter((p) => p !== permission);

    this.roleForm.patchValue({
      permissions: updatedPermissions,
    });
  }

  onSubmit() {
    if (this.roleForm.valid) {
      this.roleSubmitted.emit({
        name: this.roleForm.value.name!,
        permissions: this.roleForm.value.permissions || [],
      });
      this.roleForm.reset({ permissions: [], name: '' }); // Clear form while preserving control types
    }
  }
}
