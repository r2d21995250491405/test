import jsonServer from 'json-server'
import express, { json, request, response } from 'express'
import jwt from 'jsonwebtoken'
import cors from 'cors'
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const SECTER_KEY = 'random_secter_key';

const user = {
    login: 'login',
    password: 'password'
}
server.use(express.json());
server.use(cors());



server.post('/login', (req, res) => {
    const {login, password} = req.body

    if (login === user.login & password === user.password) {

        const token = jwt.sign({ login: login }, SECTER_KEY,
            { expiresIn: '1h' })

        return res.json({ token: token })
    }
    return res.json({ token: null })
})

server.use((request, response, next) => {

    jwt.verify(request.headers.jwt, SECTER_KEY, (error, decoded) => {
        
        if (error)
            return response.status(401).json('oh noes!')
            
        next();
        
    });


})


server.use(middlewares)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})