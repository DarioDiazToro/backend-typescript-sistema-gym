
import { getRespuestaCommon, IRespuestaFuncion } from "../../common/response.common";
import { ProveedorEntity } from "../../models/proveedor";



export const crearProveedorService = async (datos: any): Promise<IRespuestaFuncion> => {


    const proveedoresDB = await ProveedorEntity.find();
    const item = await ProveedorEntity.create(datos);

    for (let i = 0; i < proveedoresDB.length; i++) {
        const codigos = proveedoresDB[i].codigo;
        if (codigos === item.codigo) {
            return getRespuestaCommon(false, 422, `El codigo ${item.codigo} ya existe en la base de datos`);
        };
    };
    const newProveedor = await ProveedorEntity.save(item);

    return getRespuestaCommon(true, 200, "crear ok", newProveedor);
};

export const actualizarProveedorServiceById = async (id: number, datos: any): Promise<IRespuestaFuncion> => {

    const { codigo } = datos;
    if (!id) {
        return getRespuestaCommon(false, 422, "se requiere un id");
    };

    const proveedores = await ProveedorEntity.find();
    const item = await ProveedorEntity.findBy({ id });
    const proveedor = item[0];

    if (!proveedor) {
        return getRespuestaCommon(false, 422, `El id ${id} no existe en la base de datos`, null);
    };

    for (let i = 0; i < proveedores.length; i++) {
        const codigosBD = proveedores[i].codigo;


        if (codigosBD === codigo) {
            return getRespuestaCommon(false, 422, `El codigo ${codigo} ya existe en la base de datos`);

        };

    };
    await ProveedorEntity.update({ id }, datos);

    const proveedorActualizado = await ProveedorEntity.findOne({ where: { id } });

    return getRespuestaCommon(true, 200, "Actualizar ok", proveedorActualizado);

};

export const obtenerProveedoresService = async (page: number, limit: number): Promise<IRespuestaFuncion> => {
    const proveedores = await ProveedorEntity.find();

    const proveedoresArr: any[] = [];

    for (let i = proveedores.length - 1; i >= 0; i--) {
        const elements = proveedores[i];
        proveedoresArr.push(elements);
    };

    const [data, total] = await ProveedorEntity.findAndCount({
        skip: (page - 1) * limit,
        take: limit,
        where: { activo: true }
    });

    const totalPages = Math.ceil(total / limit);

    return getRespuestaCommon(true, 200, "obtener todos ok", { proveedores: data, total, totalPages, currentPage: page });
};

export const obtenerProveedorByIdService = async (id: number): Promise<IRespuestaFuncion> => {

    const item = await ProveedorEntity.findBy({ id });
    const proveedor = item[0];
    if (!proveedor) {
        return getRespuestaCommon(false, 422, `El proveedor con el id ${id} no existe en la base de datos`);
    }

    return getRespuestaCommon(true, 200, `Obtner proveedor by id ok`, proveedor);
};

export const deleteProveedorByIdService = async (id: number) => {

    const item = await ProveedorEntity.findBy({ id });
    const proveedor = item[0];
    if (!proveedor) {
        return getRespuestaCommon(false, 422, `No existe un proveedor con id ${id} en la base de datos`);
    };

    if (!proveedor.activo) {
        return getRespuestaCommon(true, 200, `El proveedor con id ${id} ya se encuentra eliminado`);
    };

    await ProveedorEntity.update({ id }, { activo: false });
    const proveedorEliminado = await ProveedorEntity.findOne({ where: { id } });
    return getRespuestaCommon(true, 200, `proveedor eliminado ok`, proveedorEliminado);

};
