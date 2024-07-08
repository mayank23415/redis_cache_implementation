import express from "express";
import routes from './routes/routes.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use('/v1/caching', routes.router)


app.listen(PORT, ()=> {
    console.log("Listing on port :", PORT)
})