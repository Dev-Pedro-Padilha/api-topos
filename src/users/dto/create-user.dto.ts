import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({
        description: 'Nome de usuário único',
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
    @MinLength(6)
    password: string;
}