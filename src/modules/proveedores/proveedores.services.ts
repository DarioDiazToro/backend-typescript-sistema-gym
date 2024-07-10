
import { getRespuestaCommon, IRespuestaFuncion } from "../../common/response.common";
import { ProveedoresEntity } from "../../models/proveedor";



export const crearProveedorService = async (datos: any): Promise<IRespuestaFuncion> => {


    const proveedoresDB = await ProveedoresEntity.find();
    const item = await ProveedoresEntity.create(datos);

    for (let i = 0; i < proveedoresDB.length; i++) {
        const codigos = proveedoresDB[i].codigo;
        if (codigos === item.codigo) {
            return getRespuestaCommon(false, 422, `El codigo ${item.codigo} ya existe en la base de datos`);
        };
    };
    const newProveedor = ProveedoresEntity.save(item);

    return getRespuestaCommon(true, 200, "crear ok", newProveedor);
};

export const actualizarProveedorServiceById = async (id: number, datos: any): Promise<IRespuestaFuncion> => {

    const item = await ProveedoresEntity.findBy({ id });
    const proveedor = item[0];

    if (!proveedor) {
        return getRespuestaCommon(false, 422, `El id ${id} no existe en la base de datos`, null);
    };

    await ProveedoresEntity.update({ id }, datos);

    const proveedorActualizado = await ProveedoresEntity.findOne({ where: { id } });

    return getRespuestaCommon(true, 200, "Actualizar ok", proveedorActualizado);

};

export const obtenerProveedoresService = async (page: number, limit: number): Promise<IRespuestaFuncion> => {
    const proveedores = await ProveedoresEntity.find({ where: { activo: true } });

    const proveedoresArr: any[] = [];

    for (let i = proveedores.length - 1; i >= 0; i--) {
        const elements = proveedores[i];
        proveedoresArr.push(elements);
    };

    const [, total] = await ProveedoresEntity.findAndCount({
        skip: (page - 1) * limit,
        take: limit,
        where: { activo: true }
    });

    const totalPages = Math.ceil(total / limit);

    return getRespuestaCommon(true, 200, "obtener todos ok", proveedoresArr, { total, totalPages, curentPage: page });
};

export const obtenerProveedorByIdService = async (id: number): Promise<IRespuestaFuncion> => {

    const item = await ProveedoresEntity.findBy({ id });
    const proveedor = item[0];
    if (!proveedor) {
        return getRespuestaCommon(false, 422, `El proveedor con el id ${id} no existe en la base de datos`);
    }

    return getRespuestaCommon(true, 200, `Obtner proveedor by id ok`, proveedor);
};

export const deleteProveedorByIdService = async (id: number) => {

    const item = await ProveedoresEntity.findBy({ id });
    const proveedor = item[0];
    if (!proveedor) {
        return getRespuestaCommon(false, 422, `No existe un proveedor con id ${id} en la base de datos`);
    };

    await ProveedoresEntity.update({ id }, { activo: false });
    const proveedorEliminado = await ProveedoresEntity.findOne({ where: { id } });
    return getRespuestaCommon(true, 200, `proveedor eliminado ok`, proveedorEliminado);

};
