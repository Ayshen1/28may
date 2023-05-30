const express = require('express')
const app = express()
const cors = require ("cors")
const bodyParser = require ("body-parser")
const dotenv = require ("dotenv")
const {default:mongoose} = require("mongoose")
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.URL

const PASSWORD = process.env.PASSWORD
mongoose.connect(URL.replace('<password>',PASSWORD))
.then(()=>console.log("mongo db connected!"))

const UserModel = new mongoose.model(
    "User",
    new mongoose.Schema({
        name:String,
        age:Number,
        image:String

    })
)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

app.get('/users',async(req,res)=>{
    const getAllUsers = await UserModel.find()
    res.status(200).send(getAllUsers)
})

app.get('/users/:id',async(req,res)=>{
    const id = req.params.id
    const getUsersById = await UserModel.findById(id)
    res.status(200).send(getUsersById)
})

app.delete('/users/:id',async(req,res)=>{
    const id = req.params.id
    const deleteUser = await UserModel.findByIdAndDelete(id)
    res.status(203).send(deleteUser)
})

app.put('/users/:id',async(req,res)=>{
    const id = req.params.id
    const putUser = await UserModel.findByIdAndUpdate(id,{
        name:req.body.name,
        age:req.body.age,
        image:req.body.image

    })
    res.status(203).send(putUser)
})

app.post('/users',async(req,res)=>{
    const newUser = new UserModel({
        name:req.body.name,
        age:req.body.age,
        image:req.body.image
    
    })
    await newUser.save()
    res.status(201).send("posted")
})

