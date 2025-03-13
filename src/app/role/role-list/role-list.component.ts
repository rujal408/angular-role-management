import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  inject,
  Output,
  signal,
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

  private readonly rolesService = inject(RoleService);

  public roles: Signal<any[]> = signal([]);

  constructor() {
    this.getData();
  }

  getData() {
    const resources = this.rolesService.getRoles;
    this.roles = computed(() => resources.value() || []);
  }

  onEdit(id: number) {
    this.edit.emit(id);
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }

  async addRole(newRoleData: { name: string; permissions: string[] }) {
    const newId = Math.random();

    await this.rolesService
      .postRole({ ...newRoleData, id: newId })
      .then((res) => {
        console.log({ res });
      });
  }
}
