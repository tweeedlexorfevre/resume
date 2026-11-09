import express from 'express'

const app = express()
const PORT = 3001

app.get('/api/card', (req, res) => {
  res.json({
    title: 'Привет с бэкенда!',
    text: 'Эти данные пришли с сервера на Node.js.',
  })
})

app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`)
})
