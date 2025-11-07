import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { Public } from './decorators/public.decorator';

/**
 * Controller de Autenticação
 * 
 * Endpoints públicos para:
 * - Registro de novos usuários
 * - Login e obtenção de tokens JWT
 * 
 * Todos os outros endpoints da API requerem autenticação JWT
 */
@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private usersService: UsersService,
    ) {}

    /**
     * Registra um novo usuário no sistema
     * 
     * @param createUserDto - Dados do usuário (username, password)
     * @returns Dados do usuário criado (sem a senha)
     */
    @Public()
    @Post('register')
    @ApiOperation({ summary: 'Registrar novo usuário' })
    @ApiResponse({ status: 201, description: 'Usuário criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    async register(@Body() createUserDto: CreateUserDto) {
        const user = await this.usersService.create(createUserDto);
        const { password, ...result } = user;
        return result;
    }

    /**
     * Realiza login e retorna token JWT
     * 
     * @param req - Request object (contém user após validação do LocalAuthGuard)
     * @param loginDto - Credenciais de login (username, password)
     * @returns Object com access_token e dados do usuário
     */
    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    @ApiOperation({ summary: 'Fazer login e obter token JWT' })
    @ApiBody({ type: LoginDto })
    @ApiResponse({ 
        status: 200, 
        description: 'Login realizado com sucesso',
        schema: {
            example: {
                access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
                user: {
                    id: 1,
                    username: 'admin'
                }
            }
        }
    })
    @ApiResponse({ status: 401, description: 'Credenciais inválidas' })
    async login(@Body() auth: LoginDto) {
        return this.authService.login(auth);
    }
}