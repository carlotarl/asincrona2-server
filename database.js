const mysql = require('mysql')
const bunyan = require('bunyan')

const logger = bunyan.createLogger({name:'Configuracion BD'})

const conexion = mysql.createConnection({
    
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
})


try {
    conexion.connect((err)=>{

        if(err) {
            throw err
        }

        logger.info('Conectado a la base de datos con exito')
    })

} catch (error) {
    
    logger.error('Error en la conexion:'+error)
}

module.exports = conexion