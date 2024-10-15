import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: EntityRepository<Customer>,
  ) {}

  async create(customerData: Partial<Customer>): Promise<Customer> {
    const customer = this.customerRepository.create(customerData);
    return this.customerRepository.insert(customer).then(() => customer);
  }

  findAll(): Promise<Customer[]> {
    return this.customerRepository.findAll({ populate: ['orders'] });
  }

  findOne(id: number): Promise<Customer> {
    return this.customerRepository.findOneOrFail(id, { populate: ['orders'] });
  }

  async update(id: number, customerData: Partial<Customer>): Promise<Customer> {
    const customer = await this.findOne(id);
    this.customerRepository.assign(customer, customerData);
    await this.customerRepository.insert(customer);
    return customer;
  }

  async remove(id: number): Promise<void> {
    const customer = await this.findOne(id);
    await this.customerRepository.nativeDelete(customer);
  }
}
