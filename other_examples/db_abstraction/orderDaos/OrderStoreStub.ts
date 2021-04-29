import { Order, OrderStatus } from "../order";
import { OrderDao } from "../OrderDao";

class OrderStoreStub implements OrderDao {
  constructor() {
    // do nothing because methods will be stubbed anyway
  }
}