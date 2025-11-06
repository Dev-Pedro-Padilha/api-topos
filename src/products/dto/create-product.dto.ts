import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
    @ApiProperty({
        description: 'Descrição do produto',
        example: 'Camiseta Personalizada Algodão'
    })
    description: string;
}