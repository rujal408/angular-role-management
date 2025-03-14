import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  computed,
  EventEmitter,
  inject,
  Output,
} from '@angular/core';
import { RoleService } from '../../services/role.service';
import { RoleFormComponent } from '../role-form/role-form.component';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
  imports: [CommonModule, RoleFormComponent],
  providers: [HttpClient],
})
export class RoleListComponent {
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  private readonly rolesService = inject(RoleService);

  // Declare as a computed signal
  public roles = computed(() => {
    const resources = this.rolesService.getRoles();
    return resources || [];
  });

  constructor() {
    this.loadData();
  }

  loadData() {
    this.rolesService.getRoles(); // Assume this fetches and updates the service's signal
  }

  onEdit(id: number) {
    this.edit.emit(id);
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }

  async addRole(newRoleData: { name: string; permissions: string[] }) {
    await this.rolesService.postRole(newRoleData);
    this.loadData();
    // No need to update local signal; service updates its state, triggering computed
  }
}
