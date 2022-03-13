export class respuesta {
    message: string = "";
    status: number = 0;
    rows?: Array<any> = []
};

export class okResp {
    message: string = "ok";
    status: number = 200;
    rows?: Array<any> = []
};

export class notFoundError {
    message: string = "No hay registros"
    status: number = 404
}
export class serverError {
    message: string = "Error en el servidor"
    status: number = 500
    error:sequelizeError = {
        name: '',
        parent: {
            code: "",
            errno: 0,
            sql: "",
            sqlMessage: "",
            sqlState: "",
        },
        original: {
            code: "",
            errno: 0,
            sql: "",
            sqlMessage: "",
            sqlState: ""
        },
        sql: "",
        parameters: {}
    }
}

export class forbiddenError {
    message: string = "Acceso denegado"
    status: number = 403
}


export interface sequelizeError {
    name: string,
    parent: {
        code: string,
        errno: number,
        sql: string,
        sqlMessage: string,
        sqlState: string
    },
    original: {
        code: string,
        errno: number,
        sql: string,
        sqlMessage: string,
        sqlState: string
    },
    sql: string,
    parameters: {}
}


// export interface sequelizeError {
//     name: 'SequelizeDatabaseError',
//     parent: {
//         code: "ER_BAD_FIELD_ERROR"
//         errno: 1054
//         sql: "SELECT `id_categoria`, `nombre`, `descripcion` FROM `categoria` AS `categoria` WHERE `categoria`.`id_usuario` = '1' AND `categoria`.`estado` = 1;"
//         sqlMessage: "Unknown column 'categoria.id_usuario' in 'where clause'"
//         sqlState: "42S22"
//     },
//     original: {
//         code: "ER_BAD_FIELD_ERROR"
//         errno: 1054
//         sql: "SELECT `id_categoria`, `nombre`, `descripcion` FROM `categoria` AS `categoria` WHERE `categoria`.`id_usuario` = '1' AND `categoria`.`estado` = 1;"
//         sqlMessage: "Unknown column 'categoria.id_usuario' in 'where clause'"
//         sqlState: "42S22"
//     },
//     sql: "SELECT `id_categoria`, `nombre`, `descripcion` FRO….`id_usuario` = '1' AND `categoria`.`estado` = 1;",
//     parameters: {}
// }