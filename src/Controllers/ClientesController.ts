const {
    Cliente
} = require('../models')

class ClientesController {

    index(req, res) {
        let data = {};
        // res.render('home_view.twig', data );
        res.send('Estás conectado a la API. Recurso: clientes');
    }

    async all(req, res) {
        let rpta = {
            message: "Error en el servidor",
            status: 500,
            rows: {}
        };

        try {
            let data = await Cliente.findAll({
                where: {
                    estado: 0
                }
            });

            if (data.length > 0) {
                rpta.message = `Mostrando ${data.length} registros`;
                rpta.status = 200;
                rpta.rows = data;
            } else {
                rpta.message = "No hay datos";
                rpta.status = 404;
            }
            return res.send(rpta);

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    //Cliente por id
    async byId(req, res) {
        let rpta = {
            message: "Error en el servidor",
            status: 500,
            rows: {}
        };
        try {
            const { id } = req.params;
            let data =  await Cliente.findAll({
                where: {
                    id_cliente: id,
                    estado: 0
                }
            });
            
            if (data.length > 0) {
                rpta.message = `Mostrando ${data.length} registro`;
                rpta.status = 200;
                rpta.rows = data; 
            }else {
                rpta.message = "El campo no existe";
                rpta.status = 404;
            }
            
            return res.send(rpta);

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    //Agregar nuevo cliente
    async add(req, res) {
        let rpta = {
            message: "Error en el servidor",
            status: 500,
            rows: {}
        };
        try {
            const clientObj = {
                nombre: req.body.nombre,
                telefono: req.body.telefono,
                direccion: req.body.direccion,
                ciudad: req.body.ciudad,
                email: req.body.email,
                ruc: req.body.ruc,
                persona_contacto: req.body.persona_contacto,
                estado: 0
            };

            let data = await Cliente.create(clientObj);
            if(data){
                rpta.message = `Registro creado con éxito`;
                rpta.status = 200;
            }
            
            return res.send(rpta);

        } catch (error) {
            console.log(error);
            throw error;
        }

    }

    //Actualizar info cliente
    async update(req, res) {
        let rpta = {
            message: "Error en el servidor",
            status: 500,
            rows: {}
        };
        try {
            const id_cliente = req.params.id;
            //datos a modificar
            const nombre = req.body.nombre;
            const telefono = req.body.telefono;
            const direccion = req.body.direccion;
            const ciudad = req.body.ciudad;
            const email = req.body.email;
            const ruc = req.body.ruc;
            const persona_contacto = req.body.persona_contacto;

            let data = await Cliente.update({
                nombre,
                telefono,
                direccion,
                ciudad,
                email,
                ruc,
                persona_contacto
            }, {
                where: {
                    id_cliente
                }
            });

            if(data[0] == 1){ // si es 1 se realizo el cambio
                rpta.message = `Datos Actualizados`;
                rpta.status = 200;
                // rpta.rows = results;
            }else{
                // throw error;
            }
            return res.send(rpta);

        } catch (error) {
            console.log(error);
            throw error;
        }

    }

    //Borrar cliente
    async delete(req, res) {
        let rpta = {
            message: "Error en el servidor",
            status: 500,
            rows: {}
        };

        try {
            const id_cliente = req.params.id;

            let data = await Cliente.update({
                estado: 1
            },{
                where: { id_cliente }
            });

            if(data){
                rpta.message = `Registro Eliminado`;
                rpta.status = 200;
            }else{
                // throw error;
            }
            
            return res.send(rpta);

        } catch (error) {
            console.log(error);
            return res.send(rpta);
        }

    }

}

module.exports = new ClientesController();