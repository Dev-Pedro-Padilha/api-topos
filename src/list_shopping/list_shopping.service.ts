import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ListShopping } from "./entities/list_shopping.entity";
import { CreateListShoppingDto } from "./dto/create-list_shopping.dto";

@Injectable()
export class ListShoppingService {
    constructor(
        @InjectRepository(ListShopping)
        private listShoppingRepository: Repository<ListShopping>,
    ) {}

    async create(createListShoppingDto: CreateListShoppingDto): Promise<ListShopping> {
        const listShopping = this.listShoppingRepository.create(createListShoppingDto);
        return this.listShoppingRepository.save(listShopping);
    }

    async findAll(): Promise<ListShopping[]> {
        return this.listShoppingRepository.find();
    }

    async remove(id: number): Promise<void> {
        await this.listShoppingRepository.delete(id);
    }
}