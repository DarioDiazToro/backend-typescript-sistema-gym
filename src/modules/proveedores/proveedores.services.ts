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
    ProveedoresEntity.save(item);

    return getRespuestaCommon(true, 200, "crear ok", item);
};

export const actualizarProveedorServiceById = async (id: any, datos: any): Promise<IRespuestaFuncion> => {

    const item = await ProveedoresEntity.findBy({ id });
    const proveedor = item[0];

    if (!proveedor) {
        return getRespuestaCommon(false, 422, `El id ${id} no existe en la base de datos`, null);
    };

    await ProveedoresEntity.update({ id }, datos);

    const proveedorActualizado = await ProveedoresEntity.findOne({ where: { id } });

    return getRespuestaCommon(true, 200, "Actualizar ok", proveedorActualizado);

};

// export const obtenerProveedoresService = async () => {
//     const proveedores = await ProveedoresEntity.findBy({ estado: true });
//     const totalProveedores = await ProveedoresEntity.countBy({ estado: true });
//     return getRespuestaCommon(true, 200, "obtener todos ok",)
// };

// export const obtenerGymByIdService = async (id: any) => {

//     const item = await GymEntity.findBy({ id });
//     const gym = item[0];
//     if (!gym) {
//         return {
//             msg: `no existe en la BD id - ${id} `,
//             code: 422,
//             data: null
//         };
//     }
//     return {
//         code: 200,
//         msg: "bien",
//         data: item
//     };
// };

// export const deleteGymByIdService = async (id: any) => {

//     const item = await GymEntity.findBy({ id });
//     const gym = item[0];
//     if (!gym) {
//         return {
//             msg: `no existe en la BD id - ${id} `,
//             code: 422,
//             data: null
//         };
//     };

//     await GymEntity.update({ id }, { estado: false });
//     const gymDelete = await GymEntity.findOne({ where: { id } });
//     return {
//         msg: `Delete ok`,
//         code: 200,
//         data: gymDelete
//     };
// };
