import express from 'express'
import moviesRoutes from './routes/routes.js'

const app = express();

app.use(express.json());
app.use('/', moviesRoutes)

app.listen(3000, ()=>{
    console.log('Server runs on port 3000')
})
