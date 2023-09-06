const express =require('express');
const cors =require('cors');
const { db} =require('./db/db')
const {readdirSync}=require('fs')
const app =express()

require('dotenv').config()

const PORT =process.env.PORT
// const PORT=3000;

//middlewares 
app.use(express.json());
app.use(cors());
app.use('/api/user', require('./routes/user')) ;
// app.get('/',(req,res) => {
//     res.send("Welcome to my API")
// })
 

//routes
readdirSync('./routes').map((route) =>app.use('/api/v1',require('./routes/'+route)))


const server =() => {
    db()
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    })
}

server();