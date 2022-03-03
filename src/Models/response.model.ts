export class resp {
    message:string = "";
    status:number = 200;
    rows?:Array<any> = []
};

export class notFoundError{
    message:string = "No hay registros"
    status:number = 404
}
export class serverError{
    message:string = "Error en servidor"
    status:number = 500
}
export class forbiddenError{
    message:string = "Acceso denegado"
    status:number = 403
}