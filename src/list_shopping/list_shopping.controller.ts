import { Controller, Post, Get, UseGuards, Body } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ListShoppingService } from "./list_shopping.service";
import { CreateListShoppingDto } from "./dto/create-list_shopping.dto";
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Itens do Pedido')
@ApiBearerAuth('JWT-auth')
@Controller('list-shopping')
@UseGuards(JwtAuthGuard)
export class ListShoppingController {
    constructor(private readonly listShoppingService: ListShoppingService) {}

    @Post()
    @ApiOperation({ summary: 'Adicionar item ao pedido' })
    @ApiResponse({ status: 201, description: 'Item adicionado com sucesso' })
    @ApiResponse({ status: 401, description: 'Token JWT requerido' })
    async create(@Body() createListShoppingDto: CreateListShoppingDto) {
        return this.listShoppingService.create(createListShoppingDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os itens dos pedidos' })
    @ApiResponse({ status: 200, description: 'Lista de itens retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Token JWT requerido' })
    async findAll() {
        return this.listShoppingService.findAll();
    }
    
    async remove(id: number) {
        return this.listShoppingService.remove(id);
    }
}