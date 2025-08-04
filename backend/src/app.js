import express from 'express'
import newsRoutes from './routes/news.js'

const app = express()
const PORT = 8000

app.use(express.json())

app.use(express.static('frontend'))

app.use('/api/news', newsRoutes)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
}).on('error', (err) => {
  console.error('Failed to start server:', err)
}) 