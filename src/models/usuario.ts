import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class UsuariosEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 50 })
    nombres: string;

    @Column({ type: 'varchar', length: 50, })
    apellidoUno: string

    @Column({ type: 'varchar', length: 50, })
    apellidoDos: string

    @Column({ type: 'varchar', })
    telefono: string

    @Column({ type: 'varchar', })
    password: string

    @Column({ type: 'varchar', length: 50, unique: true })
    documento_identificacion: string

    @Column({ type: 'varchar', length: 50 })
    genero: string

    @Column({ type: 'varchar', length: 50, })
    correo: string

    @Column({ type: 'varchar', length: 50 })
    direccion: string

    @Column({ type: 'boolean', })
    activo: boolean

}