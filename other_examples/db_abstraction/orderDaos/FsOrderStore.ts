import { Order, OrderStatus } from "../order";
import { OrderDao } from "../OrderDao";

class FsOrderStore implements OrderDao {
  constructor() {
    // do some kind of FS ownership check to make sure required operations can be performed
  }
  
}