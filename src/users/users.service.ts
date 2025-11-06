import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

/**
 * Serviço de gerenciamento de usuários
 * 
 * Funcionalidades:
 * - Criação de usuários com hash seguro de senhas (bcrypt)
 * - Busca de usuários por username
 * - Validação de credenciais para autenticação
 * 
 * Segurança:
 * - Senhas são hasheadas com bcrypt (salt rounds = 10)
 * - Senhas nunca são retornadas nas consultas
 * - Comparação segura de senhas durante login
 */
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    /**
     * Cria um novo usuário no sistema
     * A senha é automaticamente hasheada antes de salvar
     */
    async create(createUserDto: CreateUserDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        const user = this.usersRepository.create({
            ...createUserDto,
            password: hashedPassword,
        });
        return this.usersRepository.save(user);
    }

    /**
     * Busca usuário por username (usado internamente)
     */
    async findByUsername(username: string): Promise<User | undefined> {
        const user = await this.usersRepository.findOne({ where: { username } });
        return user || undefined;
    }

    /**
     * Valida credenciais do usuário para login
     * 
     * @param username - Nome de usuário
     * @param password - Senha em texto plano
     * @returns Dados do usuário (sem senha) se válido, null se inválido
     */
    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.findByUsername(username);
        if (user && await bcrypt.compare(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}