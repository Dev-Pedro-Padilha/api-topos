import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty({
        description: 'Nome de usuário',
        example: 'admin'
    })
    username: string;

    @ApiProperty({
        description: 'Senha do usuário',
        example: '123456'
    })
    password: string;
}