require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const { PrismaClient } = require('@prisma/client')

const app = express()
const prisma = new PrismaClient() //prismą zajme sie optem ale to jest potrzebne jak coś

app.use(cors()) // żądania z frontend
app.use(helmet()) // gowno ale w poradniku mówią że to bezpieczne
app.use(morgan('dev')) // loguje żądania
app.use(express.json())

//elo