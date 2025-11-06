import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('table_list_shopping')
export class ListShopping {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fk_id_product: number;

    @Column()
    fk_id_order: number;

    @Column()
    quantity: number;

    @CreateDateColumn({ type: 'timestamptz' })
    inserted_at: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date;
}