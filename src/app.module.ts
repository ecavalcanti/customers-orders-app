import { MikroOrmModule } from '@mikro-orm/nestjs';
import { SqliteDriver } from '@mikro-orm/sqlite';
import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      dbName: 'db.sqlite',
      driver: SqliteDriver,
      debug: true,
      autoLoadEntities: true,
    }),
    CustomersModule,
    OrdersModule,
  ],
})
export class AppModule {}
