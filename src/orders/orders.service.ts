import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './entities/order.entity';
import { Customer } from '../customers/entities/customer.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order)
    private readonly orderModel: typeof Order,
  ) {}

  async findAll(): Promise<Order[]> {
    return this.orderModel.findAll({ include: [Customer] }); // Inclui clientes
  }

  async findOne(id: number): Promise<Order> {
    return this.orderModel.findByPk(id, { include: [Customer] });
  }

  async create(orderData: Partial<Order>): Promise<Order> {
    return this.orderModel.create(orderData);
  }

  // Outros métodos...
}
