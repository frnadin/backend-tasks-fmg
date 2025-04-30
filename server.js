import express from 'express'
import database from './database.js'
import 'dotenv/config'
import router from './routes/user.js'
import routerTask from './routes/task.js'
const app = express()
const PORT = process.env.PORT // usando o dotenv para pegar a porta do arquivo .env
import cors from 'cors'

app.use(express.json())
app.use(cors()) 
app.use(router)
app.use(routerTask)

const start = async () => {
  try {
      await database.sync();
      console.log('Banco syncado');

      app.listen(PORT, () => console.log('Subiu a pipa do vovô'))
  } catch (error) {
      console.error("Erro ao conectar ao banco:", error);
  }
}

start()


app.get('/', (req, res) => {        
  res.send('Hello World!')
})