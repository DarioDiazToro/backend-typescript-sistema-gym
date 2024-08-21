
import path from "path";
import { GymEntity } from "../../models/gym";
import { getRespuestaCommon, IRespuestaFuncion } from "../../common/response.common";
import { eliminarImagen, subirImagen } from "../uploads/upload.service";



export const crearGymService = async (datos: any): Promise<IRespuestaFuncion> => {

    let { logo, codigo, extension } = datos;

    let newGym: any;

    const gymsCodigos = await GymEntity.findBy({ codigo: datos.codigo });

    const gymsNits = await GymEntity.findBy({ nit: datos.nit });


    if (gymsCodigos.length > 0) {
        return getRespuestaCommon(false, 422, `El codigo ${datos.codigo} ya existe en la Base de datos`);
    };

    if (gymsNits.length > 0) {

        return getRespuestaCommon(false, 422, `El nit ${datos.nit} ya existe en la Base de datos `);

    }



    const item = await GymEntity.create(datos);
    newGym = item;


    const { ok, ruta } = subirImagen(logo, codigo, extension);

    if (!ok) {
        return getRespuestaCommon(false, 422, "No fue posible subir el logo", null);
    }



    newGym.logo = ruta;
    newGym = await GymEntity.save(item);



    return getRespuestaCommon(true, 200, "Crear ok", newGym);

};

export const actualizarGymServiceById = async (id: any, datos: any): Promise<IRespuestaFuncion> => {

    try {
        const { logo, codigo } = datos;

        const { cambia_logo, extension, ...data } = datos;

        const [gym] = await GymEntity.findBy({ id });


        if (!gym) {
            console.warn(`No existe en la DB id - ${id}`);
            return getRespuestaCommon(true, 422, `No existe en la DB id - ${id}`)
        };



        const empresas = await GymEntity.find();


        for (let i = 0; i < empresas.length; i++) {
            const nit = empresas[i].nit;
            const idEmpresa = empresas[i].id;
            console.log(gym.nit, " == ", nit);
            console.log(gym.id, " == ", idEmpresa);

            if (datos.nit === nit && gym.id != idEmpresa) {
                return getRespuestaCommon(true, 422, `El nit ${datos.nit} ya existe en la Base de datos`);
            };
        };




        if (cambia_logo) {
            const pathImg = path.join(__dirname, `../../../${gym.logo}`);

            // eliminamos logo anterior
            eliminarImagen(pathImg);
            // if (!eliminarImagen(pathImg)) {
            //     return getRespuestaCommon(false, 422, 'no se logro eliminar logo')
            // }

            //subimos logo
            let { ok, ruta } = subirImagen(logo, gym.codigo, extension);

            if (!ok) {
                return getRespuestaCommon(true, 422, "No fue posible subir logo", null);
            };
            data.logo = ruta;
        };

        await GymEntity.update({ id }, data);
        const gymActualizado = await GymEntity.findBy({ id });

        return getRespuestaCommon(true, 200, "Actualizar ok", gymActualizado);

    } catch (error: any) {

        console.error("Error ActualizarGymSerice=====>", error.message);
        return getRespuestaCommon(false, 422, "No se logro actualizar", null);
    }
};

export const obtenerGymsService = async (page: number, limit: number): Promise<IRespuestaFuncion> => {


    try {
        const gyms = await GymEntity.find();
        let gimnacios: any[] = [];

        const [data, total] = await GymEntity.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
            where: { activo: true }
        });

        const totalPages = Math.ceil(total / limit);

        for (let i = gyms.length - 1; i >= 0; i--) {
            const elements = gyms[i];
            gimnacios.push(elements);
        };

        return getRespuestaCommon(true, 200, "todos ok", { gyms: data, total, totalPages, currentPage: page })


    } catch (error) {
        return getRespuestaCommon(false, 422, "Error al obtener gyms", null, { error: error })
    };

};

export const obtenerGymByIdService = async (id: any) => {

    const item = await GymEntity.findBy({ id });
    const gym = item[0];
    if (!gym) {
        return {
            msg: `no existe en la BD id - ${id} `,
            code: 422,
            data: null
        };
    }
    return {
        code: 200,
        msg: "bien",
        data: gym
    };
};

export const deleteGymByIdService = async (id: any) => {

    const item = await GymEntity.findBy({ id });
    const gym = item[0];
    if (!gym) {
        return {
            msg: `no existe en la BD id - ${id} `,
            code: 422,
            data: null
        };
    };

    await GymEntity.update({ id }, { activo: false });
    const gymDelete = await GymEntity.findOne({ where: { id } });
    return {
        msg: `Delete ok`,
        code: 200,
        data: gymDelete
    };
};
