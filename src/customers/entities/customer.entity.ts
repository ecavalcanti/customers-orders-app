import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Order } from '../../orders/entities/order.entity';

@Table({ tableName: 'customer', timestamps: false })
export class Customer extends Model<Customer> {
  @Column
  name: string;

  @Column
  email: string;

  @HasMany(() => Order)
  orders: Order[];
}
