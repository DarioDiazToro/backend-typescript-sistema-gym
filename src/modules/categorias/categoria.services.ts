import { CategoriaEntity } from "../../models/categoria";



export const crearCategoriaService = async (datos: any) => {


    const categoriasDB = await CategoriaEntity.find();
    const item = await CategoriaEntity.create(datos);

    for (let i = 0; i < categoriasDB.length; i++) {
        const codigos = categoriasDB[i].codigo;
        const nombres = categoriasDB[i].nombre;
        if (codigos === item.codigo) {
            return {
                code: 400,
                msg: `el codigo ${item.codigo} ya existe en la Base de datos === ${codigos}`,
                data: null
            };
        };

        if (nombres === item.nombre) {
            return {
                code: 400,
                msg: `el nombre ${item.nombre} ya existe en la Base de datos === ${nombres}`,
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
    const categoria = item[0];

    if (!categoria) {
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
        data: { categoria: categoria, itemActualizado }
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
    console.log(categoria);
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
