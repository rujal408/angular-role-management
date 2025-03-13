export interface Role {
  id: number;
  name: string;
  permissions: Permissions[];
}

export enum Permissions {
  READ = 'READ',
  WRITE = 'WRITE',
  DELETE = 'DELETE',
  MANAGE_USERS = 'MANAGE_USERS',
}
