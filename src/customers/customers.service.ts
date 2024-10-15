import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './entities/customer.entity';
import { Order } from '../orders/entities/order.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer)
    private readonly customerModel: typeof Customer,
  ) {}

  async findAll(): Promise<Customer[]> {
    return this.customerModel.findAll({
      include: [
        {
          model: Order,
          required: true,
        },
      ],
    });
  }

  async findOne(id: number): Promise<Customer> {
    return this.customerModel.findByPk(id, { include: [Order] });
  }

  async create(customerData: Partial<Customer>): Promise<Customer> {
    return this.customerModel.create(customerData);
  }
}
