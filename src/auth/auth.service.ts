import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

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
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

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
    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.id,
                username: user.username,
            },
        };
    }
}