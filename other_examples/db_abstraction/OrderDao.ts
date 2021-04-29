import { Order, OrderStatus } from "./Order";

export interface OrderDao {
  ordersToShip(): Order[],
  createOrder(order: Order): Order,
  updateStatus(order: Order, status: OrderStatus): Order,
}