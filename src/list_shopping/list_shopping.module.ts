import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ListShoppingController } from "./list_shopping.controller";
import { ListShoppingService } from "./list_shopping.service";
import { ListShopping } from "./entities/list_shopping.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ListShopping])],
    controllers: [ListShoppingController],
    providers: [ListShoppingService],
    exports: [ListShoppingService],
})

export class ListShoppingModule {}