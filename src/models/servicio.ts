
import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity("servicio")
export class ServicioEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id?: number;

    @Column({ type: "varchar", length: 50 })
    nombre?: string;

    @Column({ type: 'varchar', length: 50 })
    codigo?: string;

    @Column({ type: 'varchar', length: 50, })
    id_categoria?: string

    @Column({ type: 'int' })
    cantidad?: number

    @Column({ type: 'int' })
    valor?: number

    @Column({ type: 'boolean' })
    estado?: boolean


};