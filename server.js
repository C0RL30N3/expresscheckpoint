
const express = require ('express')
const path = require('path')
const app = express()
const datechecker =require('./datechecker')
const port=5000

app.use(datechecker)
//middleware (static folder)
app.use(express.static(path.join(__dirname, 'public')))





app.listen(5000, (err)=>{
    if(err){
        throw err
    }else{
        console.log('SERVER IS  RUNNING...')
    }
}
) 
   

