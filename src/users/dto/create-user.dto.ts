import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
        description: 'Nome de usuário único',
        example: 'admin'
    })
    username: string;

    @ApiProperty({
        description: 'Senha do usuário',
        example: '123456'
    })
    password: string;
}