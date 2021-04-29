
export interface RestrictedReadable {
  isPublic(): boolean,
  belongsTo(account): boolean,
}

export interface RestrictedWritable {
  isPublic(): boolean,
  belongsTo(account): boolean,
}

export interface Authorizable {
  canCreate(entity: RestrictedWritable): boolean,
  canRead(entity: RestrictedReadable): boolean,
  canUpdate(entity: RestrictedWritable): boolean,
  canDelete(entity: RestrictedWritable): boolean,
}