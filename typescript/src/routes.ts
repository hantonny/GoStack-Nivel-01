import {Request, Response} from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response){
    const user = createUser({
        name: 'Hantonny',
        email: 'hantonny.20@gmail.com',
        password: '392766.20',
        techs: [
            'Node.js', 
            'ReactJS', 
            'React Native',
            { title: 'JavaScript', experience: 10 },
            { title: 'PHP', experience: 100}
        ]
    })

    console.log(user.email)

    return response.json({message: 'Hello World!'})
}
