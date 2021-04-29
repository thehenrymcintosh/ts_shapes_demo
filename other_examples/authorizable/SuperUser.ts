import { Authorizable, RestrictedWritable, RestrictedReadable } from "./Authorizable";

export class SuperUser implements Authorizable {
  canCreate(entity: RestrictedWritable) {
    return true;
  }
  canRead(entity: RestrictedReadable) {
    return true;
  }
  canUpdate(entity: RestrictedWritable) {
    return true;
  }
  canDelete(entity: RestrictedWritable) {
    return true;
  }
}