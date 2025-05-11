import express from 'express'
import database from './database.js'
import 'dotenv/config'
import router from './routes/user.js'
import routerTask from './routes/task.js'
import routerTasks from './routes/allTasks.js'
const app = express()
const PORT = process.env.PORT  || 3000
import cors from 'cors'

app.use(express.json())
app.use(cors({
  origin: '*',
}));app.use(router)
app.use(routerTask)
app.use(routerTasks)

const start = async () => {
  try {
      await database.sync();
      console.log('Banco syncado');
      app.listen(PORT, () => console.log(`Subiu a pipa do vovô. port:${PORT}`));

  } catch (error) {
      console.error("Erro ao conectar ao banco:", error);
  }
}

start()
