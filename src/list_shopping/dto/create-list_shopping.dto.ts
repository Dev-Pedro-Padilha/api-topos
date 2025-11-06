import { ApiProperty } from '@nestjs/swagger';

export class CreateListShoppingDto {
    @ApiProperty({
        description: 'ID do produto',
        example: 1
    })
    fk_id_product: number;

    @ApiProperty({
        description: 'ID do pedido',
        example: 1
    })
    fk_id_order: number;

    @ApiProperty({
        description: 'Quantidade do produto',
        example: 2
    })
    quantity: number;
}