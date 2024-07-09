
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("categoria")
export class CategoriaEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id?: number;

    @Column({ type: "varchar", length: 50 })
    nombre?: string;

    @Column({ type: "varchar", length: 50 })
    codigo?: string;

    @Column({ type: "boolean" })
    activo?: boolean;
};