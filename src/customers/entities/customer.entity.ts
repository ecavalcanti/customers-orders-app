import {
  Entity,
  PrimaryKey,
  Property,
  OneToMany,
  Collection,
} from '@mikro-orm/core';
import { Order } from '../../orders/entities/order.entity';

@Entity()
export class Customer {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @Property()
  email: string;

  @OneToMany(() => Order, (order) => order.customer)
  orders = new Collection<Order>(this);
}
