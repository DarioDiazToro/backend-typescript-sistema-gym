import { CategoriaEntity } from "../../models/categoria";



export const crearCategoriaService = async (datos: any) => {


    const categoriasDB = await CategoriaEntity.find();
    const item = await CategoriaEntity.create(datos);

    for (let i = 0; i < categoriasDB.length; i++) {
        const codigo = categoriasDB[i].codigo;
        if (codigo === item.codigo) {
            return {
                code: 400,
                msg: `el codigo ${item.codigo} ya existe en la Base de datos === ${codigo}`,
                data: null
            };
        };
    };
    CategoriaEntity.save(item);
    return {
        data: item,
        msg: "crear categoria ok",
        code: 200,
    };
};

export const actualizarCategoriaServiceById = async (id: any, datos: any) => {

    const item = await CategoriaEntity.findBy({ id });
    const gym = item[0];

    if (!gym) {
        return {
            msg: `no existe en la BD id- ${id} `,
            code: 422,
            data: null
        };
    };

    await CategoriaEntity.update({ id }, datos);

    const itemActualizado = await CategoriaEntity.findOne({ where: { id } });

    return {
        msg: "actualizar ok",
        code: 200,
        data: { gym, itemActualizado }
    };

};


export const obtenerCategoriasService = async () => {
    const itemCategorias = await CategoriaEntity.findBy({ estado: true });
    const countCategorias = await CategoriaEntity.countBy({ estado: true });
    return {
        total: countCategorias,
        itemCategorias,
    };
};

export const obtenerCategoriaByIdService = async (id: any) => {

    const item = await CategoriaEntity.findBy({ id });
    const categoria = item[0];
    if (!categoria) {
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

export const deleteCategoriaByIdService = async (id: any) => {

    const item = await CategoriaEntity.findBy({ id });
    const categoria = item[0];
    if (!categoria) {
        return {
            msg: `no existe en la BD id - ${id} `,
            code: 422,
            data: null
        };
    };

    await CategoriaEntity.update({ id }, { estado: false });
    const categoriaEliminada = await CategoriaEntity.findOne({ where: { id } });
    return {
        msg: `Delete ok`,
        code: 200,
        data: categoriaEliminada
    };
};
