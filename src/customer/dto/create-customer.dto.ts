import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
    @ApiProperty({
        description: 'Nome completo do cliente',
        example: 'João Silva'
    })
    name: string;

    @ApiProperty({
        description: 'Telefone do cliente',
        example: '(11) 99999-9999'
    })
    phone: string;

    @ApiProperty({
        description: 'Endereço do cliente',
        example: 'Rua das Flores, 123'
    })
    adress: string;
}