import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT // usando o dotenv para pegar a porta do arquivo .env

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Subiu o vovo da pipa ${PORT}`)
}  )

app.get('/', (req, res) => {        
  res.send('Hello World!')
})