import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('table_products')
export class Product {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @CreateDateColumn({ type: 'timestamptz' })
    inserted_at: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date;

    @Column()
    description: string;
}