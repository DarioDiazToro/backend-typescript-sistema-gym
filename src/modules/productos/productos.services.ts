
import { getRespuestaCommon, IRespuestaFuncion } from "../../common/response.common";
import { ProductoEntity } from "../../models/producto";



export const crearProductoService = async (datos: any): Promise<IRespuestaFuncion> => {


    const productosDB = await ProductoEntity.find();
    const item = await ProductoEntity.create(datos);

    for (let i = 0; i < productosDB.length; i++) {
        const codigos = productosDB[i].codigo;
        if (codigos === item.codigo) {
            return getRespuestaCommon(false, 422, `El codigo ${item.codigo} ya existe en la base de datos`);
        };
    };
    const newProducto = await ProductoEntity.save(item);

    return getRespuestaCommon(true, 200, "crear ok", newProducto);
};

export const actualizarProductoServiceById = async (id: number, datos: any): Promise<IRespuestaFuncion> => {

    const { codigo } = datos;
    if (!id) {
        return getRespuestaCommon(false, 422, "se requiere un id");
    };

    const productos = await ProductoEntity.find();
    const item = await ProductoEntity.findBy({ id });
    const producto = item[0];

    if (!producto) {
        return getRespuestaCommon(false, 422, `El id ${id} no existe en la base de datos`, null);
    };

    for (let i = 0; i < productos.length; i++) {
        const codigosBD = productos[i].codigo;


        if (codigosBD === codigo) {
            return getRespuestaCommon(false, 422, `El codigo ${codigo} ya existe en la base de datos`);

        };

    };
    await ProductoEntity.update({ id }, datos);

    const proveedorActualizado = await ProductoEntity.findOne({ where: { id } });

    return getRespuestaCommon(true, 200, "Actualizar ok", proveedorActualizado);

};

export const obtenerProductosService = async (page: number, limit: number): Promise<IRespuestaFuncion> => {
    const productos = await ProductoEntity.find();

    const productosArr: any[] = [];

    for (let i = productos.length - 1; i >= 0; i--) {
        const elements = productos[i];
        productosArr.push(elements);
    };

    const [data, total] = await ProductoEntity.findAndCount({
        skip: (page - 1) * limit,
        take: limit,
        where: { activo: true }
    });

    const totalPages = Math.ceil(total / limit);

    return getRespuestaCommon(true, 200, "obtener todos ok", { productos: data, total, totalPages, currentPage: page });
};

export const obtenerProductoByIdService = async (id: number): Promise<IRespuestaFuncion> => {

    const item = await ProductoEntity.findBy({ id });
    const producto = item[0];
    if (!producto) {
        return getRespuestaCommon(false, 422, `El producto con el id ${id} no existe en la base de datos`);
    }

    return getRespuestaCommon(true, 200, `Obtener prodcuto by id ok`, producto);
};

export const deleteProductoByIdService = async (id: number) => {

    const item = await ProductoEntity.findBy({ id });
    const producto = item[0];
    if (!producto) {
        return getRespuestaCommon(false, 422, `No existe un producto con id ${id} en la base de datos`);
    };

    if (!producto.activo) {
        return getRespuestaCommon(true, 200, `El producto con id ${id} ya se encuentra eliminado`);
    };

    await ProductoEntity.update({ id }, { activo: false });
    const productoEliminado = await ProductoEntity.findOne({ where: { id } });
    return getRespuestaCommon(true, 200, `producto eliminado ok`, productoEliminado);

};
