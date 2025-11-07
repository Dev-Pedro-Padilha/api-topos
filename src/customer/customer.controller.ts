import { Controller, Get, Post, Body } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CustomerService } from "./customer.service";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { Customer } from "./entities/customer.entity";

@ApiTags('Clientes')
@ApiBearerAuth('JWT-auth')
@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    @Post()
    @ApiOperation({ summary: 'Criar novo cliente' })
    @ApiResponse({ status: 201, description: 'Cliente criado com sucesso' })
    @ApiResponse({ status: 401, description: 'Token JWT requerido' })
    async create(@Body() createCustomerDto: CreateCustomerDto): Promise<Customer> {
        return this.customerService.create(createCustomerDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os clientes' })
    @ApiResponse({ status: 200, description: 'Lista de clientes retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Token JWT requerido' })
    async findAll(): Promise<Customer[]> {
        return this.customerService.findAll();
    }
}