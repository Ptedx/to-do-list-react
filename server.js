const express = require('express')
const {Pool} = require('pg')
const cors = require('cors')
const app = express()
const port = 3002
app.use(express.json())
app.use(cors())

const pool = new Pool({
    user: 'postgres',
    password:'123',
    host:'localhost',
    database:'items',
    port:5432
})
//Routes
app.get('/',async (req, res)=>{
    try{
        const connect = await pool.connect()
        await connect.query('BEGIN');

        const result = await connect.query('select * from item')
        
        await connect.query('COMMIT')
        connect.release()
        res.json(result.rows)
    }catch(error){
        console.log('Error: ',(error))
    }
})

app.post('/send', async (req, res)=>{
    try{
        const task = req.body
        const connect = await pool.connect()
        await connect.query('BEGIN')
        await connect.query('DELETE FROM item')
        for (let indice = 0; indice < task.length; indice++){
            await connect.query('insert into item (nome) values($1)',[task[indice]])
        }
        await connect.query('COMMIT')
        connect.release()
        res.status(200).send('Inseridos com sucesso!')
    }catch(error){
        res.status(500).send(`ERROR: ${error}`)
    }
})

app.listen(port,()=>{
    console.log(`Servidor funcionando na porta ${port}`)
})