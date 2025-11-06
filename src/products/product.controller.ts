import { Controller, Get, Post, Body, UseGuards } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { Product } from "./entities/products.entity";
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Produtos')
@ApiBearerAuth('JWT-auth')
@Controller('product')
@UseGuards(JwtAuthGuard)
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    @ApiOperation({ summary: 'Criar novo produto' })
    @ApiResponse({ status: 201, description: 'Produto criado com sucesso' })
    @ApiResponse({ status: 401, description: 'Token JWT requerido' })
    async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productService.create(createProductDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os produtos' })
    @ApiResponse({ status: 200, description: 'Lista de produtos retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Token JWT requerido' })
    async findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }
}