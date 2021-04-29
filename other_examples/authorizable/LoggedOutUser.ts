import { Authorizable, RestrictedReadable, RestrictedWritable } from "./Authorizable";

export class LoggedOutUser implements Authorizable {
  canCreate(entity: RestrictedWritable) {
    return false;
  }
  canRead(entity: RestrictedReadable) {
    return entity.isPublic();
  }
  canUpdate(entity: RestrictedWritable) {
    return false;
  }
  canDelete(entity: RestrictedWritable) {
    return false;
  }
}