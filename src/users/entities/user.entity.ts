import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
    @ApiProperty({ description: 'ID único do usuário' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: 'Nome de usuário único' })
    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @ApiProperty({ description: 'Data de criação' })
    @CreateDateColumn({ type: 'timestamptz' })
    created_at: Date;

    @ApiProperty({ description: 'Data de atualização' })
    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date;
}