import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: EntityRepository<Order>,
  ) {}

  create(orderData: Partial<Order>): Promise<Order> {
    const order = this.orderRepository.create(orderData);
    return this.orderRepository.insert(order).then(() => order);
  }

  findAll(): Promise<Order[]> {
    return this.orderRepository.findAll({ populate: ['customer'] });
  }

  findOne(id: number): Promise<Order> {
    return this.orderRepository.findOneOrFail(id, { populate: ['customer'] });
  }

  async update(id: number, orderData: Partial<Order>): Promise<Order> {
    const order = await this.findOne(id);
    this.orderRepository.assign(order, orderData);
    await this.orderRepository.insert(order);
    return order;
  }

  async remove(id: number): Promise<void> {
    const order = await this.findOne(id);
    await this.orderRepository.nativeDelete(order);
  }
}
