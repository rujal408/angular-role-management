import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class RoleFormComponent {
  protected name = new FormControl<string>('', Validators.required);
  protected submitted = false;
}
