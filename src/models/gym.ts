import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity("gym")
export class GymEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id?: number;

    @Column({ type: 'varchar', length: 50 })
    nombre?: string;

    @Column({ type: 'varchar', length: 50, })
    codigo?: string

    @Column({ type: 'varchar', length: 50 })
    direccion?: string

    @Column({ type: 'varchar', length: 50 })
    telefono?: string

    @Column({ type: 'boolean' })
    estado?: boolean



};