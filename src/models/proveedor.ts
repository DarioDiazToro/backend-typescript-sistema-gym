
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("proveedores")
export class ProveedoresEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id?: number;

    @Column({ type: 'varchar', length: 50 })
    nombre?: string;

    @Column({ type: 'varchar', length: 50, })
    codigo?: string

    @Column({ type: 'varchar', })
    id_categoria?: string

    @Column({ type: 'int', })
    valor?: number

    @Column({ type: 'int', })
    cantidad?: number

    @Column({ type: 'varchar', length: 50 })
    activo?: boolean
};

