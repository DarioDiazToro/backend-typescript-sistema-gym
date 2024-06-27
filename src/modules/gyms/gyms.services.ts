
import { GymEntity } from "../../models/gym";


export const crearGymService = async (datos: any) => {


    const gymsDB = await GymEntity.find();
    const item = await GymEntity.create(datos);

    for (let i = 0; i < gymsDB.length; i++) {
        const codigo = gymsDB[i].codigo;
        if (codigo === item.codigo) {
            return {
                code: 400,
                msg: `el codigo ${item.codigo} ya existe en la Base de datos === ${codigo}`,
                data: null
            };
        };
    };
    GymEntity.save(item);
    return {
        data: item,
        msg: "crear gym ok",
        code: 200,
    };
};

export const actualizarGymServiceById = async (id: any, datos: any) => {

    const item = await GymEntity.findBy({ id });
    const gym = item[0];

    if (!gym) {
        return {
            msg: `no existe en la BD id- ${id} `,
            code: 422,
            data: null
        };
    };

    await GymEntity.update({ id }, datos);

    const itemActualizado = await GymEntity.findOne({ where: { id } });

    return {
        msg: "actualizar ok",
        code: 200,
        data: { gym, itemActualizado }
    };

};


export const obtenerGymsService = async () => {
    const itemGyms = await GymEntity.findBy({ estado: true });
    const countGyms = await GymEntity.countBy({ estado: true });
    return {
        total: countGyms,
        itemGyms,
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
        data: item
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

    await GymEntity.update({ id }, { estado: false });
    const gymDelete = await GymEntity.findOne({ where: { id } });
    return {
        msg: `Delete ok`,
        code: 200,
        data: gymDelete
    };
};
