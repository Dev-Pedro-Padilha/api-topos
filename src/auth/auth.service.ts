import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';

/**
 * Serviço responsável pela autenticação JWT
 * 
 * Features implementadas:
 * - Validação de credenciais de usuário
 * - Geração de tokens JWT com expiração de 24h
 * - Payload do token contém username e userId
 */
@Injectable()
export class AuthService {
    private readonly jwtSecret: string;
    private readonly jwtExpire: string;

    constructor(
        private usersService: UsersService,
    ) {
        this.jwtSecret = process.env.JWT_SECRET_KEY || 'default-secret';
        this.jwtExpire = process.env.JWT_EXPIRES_IN || '24h';
    }

    /**
     * Valida as credenciais do usuário (username/password)
     * Utiliza bcrypt para comparação segura de senhas
     */
    async validateUser(username: string, password: string): Promise<any> {
        return this.usersService.validateUser(username, password);
    }

    /**
     * Gera token JWT após login bem-sucedido
     * 
     * @param user - Dados do usuário validado
     * @returns Object contendo access_token e dados do usuário
     */
    async login(user: LoginDto) {
        const payload = { username: user.username };
        return {
            access_token: sign(payload, this.jwtSecret, { expiresIn: this.jwtExpire } as any),
        };
    }
}