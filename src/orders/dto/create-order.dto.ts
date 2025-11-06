import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
    @ApiProperty({
        description: 'ID do cliente',
        example: 1
    })
    fk_id_customer: number;

    @ApiProperty({
        description: 'Valor total do pedido',
        example: 89.90
    })
    value: number;

    @ApiProperty({
        description: 'Data de entrega',
        example: '2024-01-20T14:30:00.000Z'
    })
    date_out: Date;

    @ApiProperty({
        description: 'Forma de pagamento',
        example: 'PIX'
    })
    pay: string;
}