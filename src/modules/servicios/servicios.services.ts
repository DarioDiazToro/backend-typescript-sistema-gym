
import { ServicioEntity } from "../../models/servicio";


export const crearServicioService = async (datos: any) => {

    const servicios = await ServicioEntity.find();
    const servicio = await ServicioEntity.create(datos);
    const { codigo } = servicio;
    for (let i = 0; i < servicios.length; i++) {
        const codigos = servicios[i].codigo;
        if (codigos === codigo) {
            return {
                msg: `El codigo ${codigo} debe ser unico ya existes en la base de datos`,
                code: 400,
                data: null,
            }
        };
    };
    await ServicioEntity.save(servicio);
    return {
        code: 200,
        msg: "crear ok",
        data: servicio,
    }
};

export const actualizarServicioServiceById = async (id: number) => {
    const servicio = await ServicioEntity.findBy({ id });
    console.log(servicio);
};
