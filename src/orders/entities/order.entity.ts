import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { Customer } from '../../customers/entities/customer.entity';

@Entity()
export class Order {
  @PrimaryKey()
  id: number;

  @Property()
  item: string;

  @Property()
  price: number;

  @ManyToOne(() => Customer)
  customer: Customer;
}
