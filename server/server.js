const mongoose = require('mongoose')
const express = require('express')
const app = express()
const PORT = 8080
const cors = require('cors')
 
app.use(cors())


let ElementSchema = new mongoose.Schema({
    name: String,
    date: String,
    img:String
})
mongoose.connect('mongodb+srv://niyaz_ds:niyaz2003@mycluster.lkesjew.mongodb.net/?retryWrites=true&w=majority').then((res)=>console.log('connected'))

let ElementModel = mongoose.model('ElementSchema', ElementSchema)
app.use(express.json())

app.get('/api/elements', async (req, res)=>{
    let elements = await ElementModel.find({})
    res.send(elements)
})

app.get('/api/elements/:id', async (req, res)=>{
    let {id} = req.params
    let elementsId = await ElementModel.findById(id)
    res.send(elementsId)
})

app.delete('/api/elements/:id', async (req, res)=>{
    let {id} =req.params
    let deletedElement= await ElementModel.findByIdAndDelete(id)
    res.send(deletedElement)
})

app.post('/api/elements', async (req, res)=>{
    let newElement = new ElementModel({...req.body})
   await newElement.save()
    res.status(201).send({message:"created", element:newElement})
})


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})


