
import { Any } from "typeorm";
import { GymEntity } from "../../models/gym";
import { getRespuestaCommon, IRespuestaFuncion } from "../../common/response.common";



export const crearGymService = async (datos: any) => {


    const gymsDB = await GymEntity.find();
    const item = await GymEntity.create(datos);

    for (let i = 0; i < gymsDB.length; i++) {
        const codigos = gymsDB[i].codigo;
        const nits = gymsDB[i].nit;
        if (codigos === item.codigo) {
            return {
                code: 400,
                msg: `el codigo ${item.codigo} ya existe en la Base de datos === ${codigos}`,
                data: null
            };
        };

        if (nits === item.nit) {
            return {
                code: 400,
                msg: `el nit ${item.nit} ya existe en la Base de datos === ${nits}`,
                data: null
            };
        };
    };
    const newGym = await GymEntity.save(item);
    return {
        data: newGym,
        msg: "crear gym ok",
        code: 200,
    };
};

export const actualizarGymServiceById = async (id: any, datos: any) => {

    const { codigo, nit } = datos;

    const item = await GymEntity.findBy({ id });
    const gyms = await GymEntity.find();
    const gym = item[0];

    if (!gym) {
        return {
            msg: `no existe en la BD id- ${id} `,
            code: 422,
            data: null
        };
    };

    for (let i = 0; i < gyms.length; i++) {
        const codigosBD = gyms[i].codigo;
        const nits = gyms[i].nit;

        if (codigosBD === codigo) {
            return {
                msg: `el codigo - ${codigo}  ya exite en la base de datos`,
                code: 422,
                data: null
            };
        };

        if (nits === nit) {
            return {
                msg: `el nit - ${nit}  ya exite en la base de datos`,
                code: 422,
                data: null
            };
        };
    };

    await GymEntity.update({ id }, datos);

    const gymActualizado = await GymEntity.findOne({ where: { id } });

    return {
        msg: "actualizar ok",
        code: 200,
        data: { itemActualizado: gymActualizado }
    };

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
