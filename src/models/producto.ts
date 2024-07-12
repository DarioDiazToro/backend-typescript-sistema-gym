

import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity("productos")
export class ProductoEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column({ type: 'varchar', length: 50 })
    nombre!: string;

    @Column({ type: 'varchar', length: 50, })
    codigo!: string;

    @Column({ type: "varchar" })
    id_proveedor!: string;

    @Column({ type: "int" })
    valor_total!: number;

    @Column({ type: "int" })
    id_categoria!: number;

    @Column({ type: "int" })
    cantidad!: number;

    @Column({ type: "int" })
    valor_unitario!: number;

    @Column({ type: 'boolean' })
    activo!: boolean;

};