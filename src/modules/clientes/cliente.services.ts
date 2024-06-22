import { ClienteEntity } from "../../models/cliente";



export const crearClienteService = async (datos: any) => {

    const datosCliente = await ClienteEntity.create(datos);
    const { documento_identificacion: documentoIT, } = datosCliente;
    const clienteDB = await ClienteEntity.find()



    for (let i = 0; i < clienteDB.length; i++) {
        const documento = clienteDB[i].documento_identificacion;

        if (documento === documentoIT) {
            return {
                code: 422,
                msg: `el documento ${documentoIT} ya existe en la Base de datos debe ser unico === ${documento}`,
                data: null
            };

        };

    };
    const cliente = await ClienteEntity.save(datosCliente);

    return {
        msg: "crear ok",
        data: cliente,
        code: 200
    };
};

export const actualizarClienteServiceById = async (id: any, datos: any) => {

    const item = await ClienteEntity.findBy({ id });

    const cliente = item[0];

    if (!cliente) {
        return {
            msg: `no existe en la BD id- ${id} `,
            code: 422,
            data: null
        };
    };

    await ClienteEntity.update({ id }, datos);

    const itemActualizado = await ClienteEntity.findOne({ where: { id } });

    return {
        msg: "actualizar ok",
        code: 200,
        data: { cliente, itemActualizado }
    };

};

export const obtenerClienteByIdService = async (id: any) => {
    const cliente = await ClienteEntity.findBy({ id });

    if (cliente.length === 0) {
        return {
            msg: `no existe en la BD id - ${id} `,
            code: 422,
            data: null
        };
    }
    return {
        code: 200,
        msg: "bien",
        data: cliente
    }
};


export const obtenerClientesService = async () => {
    const clientes = await ClienteEntity.findBy({ activo: true });
    const totalClientes = await ClienteEntity.countBy({ activo: true });

    return {
        totalClientes,
        clientes,
    };

};


export const deleteClienteByIdService = async (id: any) => {
    const item = await ClienteEntity.findBy({ id });

    const cliente = item[0];
    if (!cliente) {
        return {
            msg: `no existe en la BD id - ${id} `,
            code: 422,
            data: null
        };
    };

    await ClienteEntity.update({ id }, { activo: false });
    const clienteEliminado = await ClienteEntity.findOne({ where: { id } });
    return {
        msg: `Delete ok`,
        code: 200,
        data: clienteEliminado
    };
};


