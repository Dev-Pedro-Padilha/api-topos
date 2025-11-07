import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class LoginDto {
    @ApiProperty({
        description: 'Nome de usuário',
        example: 'admin'
    })
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({
        description: 'Senha do usuário',
        example: '123456'
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}