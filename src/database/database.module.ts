import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from '../customers/entities/customer.entity';
import { Order } from '../orders/entities/order.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: './db.sqlite',
      models: [Customer, Order],
      //synchronize: true, // Cria as tabelas automaticamente
    }),
  ],
})
export class DatabaseModule {}
