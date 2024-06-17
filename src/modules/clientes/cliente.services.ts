import { ClienteEntity } from "../../models/cliente";



export const crearClienteService = async (datos: any) => {

    const datosCliente = await ClienteEntity.create(datos);
    const { documento_identificacion: documentoIT, correo } = datosCliente;
    const clienteDB = await ClienteEntity.find()



    for (let i = 0; i < clienteDB.length; i++) {
        const documento = clienteDB[i].documento_identificacion;
        const correoDB = clienteDB[i].correo;

        if (documento === documentoIT) {
            return {
                code: 400,
                msg: `el documento ${documentoIT} ya existe en la Base de datos debe ser unico === ${documento}`,
                data: null
            };

        };
        if (correo === correoDB) {
            return {
                code: 400,
                msg: `el correo ${correo} ya existe en la Base de datos debe ser unico === ${correoDB}`,
                data: null
            };

        };

    };
    const cliente = await ClienteEntity.save(datosCliente);

    return cliente;
};

export const actualizarClienteServiceById = async (id: number, datos: any) => {

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

export const obtenerClienteByIdService = async (id: number) => {
    const cliente = await ClienteEntity.findBy({ id });

    if (!cliente) {
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
    const clientes = await ClienteEntity.findBy({ estado: true });
    const totalClientes = await ClienteEntity.countBy({ estado: true });

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

    await ClienteEntity.update({ id }, { estado: false });
    const clienteEliminado = await ClienteEntity.findOne({ where: { id } });
    return {
        msg: `Delete ok`,
        code: 200,
        data: clienteEliminado
    };
};


