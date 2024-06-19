const express = require ('express')
const cors = require ('cors')
const path = require ('path')
const bunyan = require ('bunyan')

require('dotenv').config()

const textosRouter = require('./router/textosRouter')
const textosController = require('./controller/textosController')


const app = express()
app.use (cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'public') ))

const logger = bunyan.createLogger({name:'Asicrona 2'})

app.use('/textos',textosRouter)


app.get('/', (req, res, next) => {

    try {
        res.status(200).json('Haciendo GET en /')
    }catch (error) {
        next(error)
    }
})


app.use((err,req,res,next)=>{
    res.status(404).json({mensaje: 'No se ha enconrtrado la ruta'})
})

app.use((err,req,res,next)=>{
    res.status(500).json({mensaje:err})
})

app.listen(3000, ()=>{
    logger.info('Servidor de express levantados')
})