import {config}from 'dotenv'

config()

export const PORT = process.env.PORT || 300
export const DB_PORT = process.env.DB_PORT
export const DB_USER = process.env.DB_USER || riveraso_nsga
export const DB_PASSWORD = process.env.DB_PASSWORD || 'owmC56?9'
export const DB_DATABASE = process.env.DB_DATABASE || nsgacurso
export const DB_HOST = process.env.DB_HOST || riveradev.com.co


