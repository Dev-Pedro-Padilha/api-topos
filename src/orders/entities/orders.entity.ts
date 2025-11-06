import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('table_orders')
export class Order {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    fk_id_customer: number;

    @Column()
    value: number;

    @CreateDateColumn({ type: 'timestamptz' })
    inserted_at: Date;

    @Column({ type: 'timestamptz' })
    date_out: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date;

    @Column()
    pay: string;
}