import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './products/product.module';
import { OrderModule } from './orders/order.module';
import { ListShoppingModule } from './list_shopping/list_shopping.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            url: process.env.DATABASE_URL,
            entities: [],
            ssl: {rejectUnauthorized: false},
            autoLoadEntities: true,
            synchronize: true,
        }),
        AuthModule,
        UsersModule,
        CustomerModule,
        ProductModule,
        OrderModule,
        ListShoppingModule,
    ],
})

export class AppModule {}