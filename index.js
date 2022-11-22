const express = require('express')
const Joi = require('joi')
const app = express()

app.use(express.static('../nodeTest.js/nodeexsem'))

app.use(express.json())
const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
]
app.get('/',(req,res)=>{
    res.send('lkugwe')
})
app.get('/api/courses',(req,res)=>{
    res.send(courses)
})

app.post('/api/courses',(req,res)=>{
    const schema = Joi.object({
        name: Joi.string().min(4).max(7).required(),
        id:Joi.number()
    })
    const course = {
        id: courses.length + 1 ,
        name : req.body.name
    }
        const result= schema.validate(course)
        if(result.error){
            res.send(result.error)
            return
        }
    courses.push(course)
    res.send(courses)
})


app.put('/api/courses/:id',(req,res)=>{
    const schema = Joi.object({
        name: Joi.string().min(4).max(7).required(),
        id:Joi.number()
    })
    const courseVal = {
        id: req.params.id ,
        name : req.body.name
    }
        const {error}= schema.validate(courseVal)
        if(error){
            res.send(error.details[0].message)
            return
        }
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course){ res.status(404).send('the course isnt exist')}
    courses[course.id-1].name = req.body.name
    res.send(course)
})
app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course){ res.status(404).send('the course isnt exist') 
return}
    res.send(course)
})
app.delete('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course){ res.status(404).send('the course isnt exist') 
return}
    courses.splice(course.id-1,1)
    res.send(courses)
})

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`listning to port ${port}`))