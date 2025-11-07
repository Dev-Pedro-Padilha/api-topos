import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './products/product.module';
import { OrderModule } from './orders/order.module';
import { ListShoppingModule } from './list_shopping/list_shopping.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
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
    providers: [
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
    ],
})

export class AppModule {}