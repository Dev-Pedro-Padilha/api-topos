import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('table_customer')
export class Customer{
    @ApiProperty({ description: 'ID único do cliente' })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty({ description: 'Nome completo do cliente' })
    @Column()
    name: string;

    @ApiProperty({ description: 'Telefone do cliente' })
    @Column()
    phone: string;

    @ApiProperty({ description: 'Endereço do cliente' })
    @Column()
    adress: string;

    @ApiProperty({ description: 'Data de criação' })
    @CreateDateColumn({ type: 'timestamptz' })
    inserted_at: Date;

    @ApiProperty({ description: 'Data de atualização' })
    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date;
}