import { Customer } from '../../customers/entities/customer.entity';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'order', timestamps: false })
export class Order extends Model<Order> {
  @Column
  item: string;

  @Column
  price: number;

  @ForeignKey(() => Customer)
  @Column({ field: 'customer_id' })
  customerId: number;
}
