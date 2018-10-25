const express = require('express')
const app = express()
const parser = require('body-parser')

//General Middleware
app.use(parser.json())
app.use(parser.urlencoded({ extended: false}))

let port = process.env.PORT || 3000

//Data
const characters = require('./data.json')
// console.log(characters)

app.get('/', function (req,res){
    res.send('Hi there 🇿🇦')
})

app.get('/characters', (req,res) =>{
//send back all characters with a root key of 'characters'
  res.json({characters})
})

// app.get('/characters', (req,res) =>{
// //send back all characters with a root key of 'data'
//   res.json({data: characters})
// })

//create a GET route that returns a single character from the Data
  //use route parameters

// app.get('/characters/:id', (req,res) =>{
//   const id = req.params.id
//   for(let i=0; i<characters.length; i++){
//     if(characters[i].id == id){
//       res.json(characters[i])
//     }
//
//   }
// })

//OR
app.get('/characters/:id', (req,res,next) =>{
  const id = req.params.id
  // if()
  const character = characters.filter(character=> {
    return character.id == id
  })[0]
res.json(character)
})


app.post('/characters', (req, res, next) => {
  const body = req.body
  characters.push(body)
  res.json({ characters: characters})
})

app.put('/characters/:id', (req,res,next) =>{
  const id = req.params.id
  const body = req.body
  const updatedCharacters = characters.map(character=>{
    if(character.id == id){
      return body
    }
    return character
  })
  res.json(updatedCharacters)

})

app.delete('/characters/:id', (req,res)=>{
  const id = req.params.id
  const survivors = characters.filter(character=> {
    return character.id != id
  })
res.json({characters: survivors})
})


// Error Handling

app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next) {
  res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl})
}

// eslint-disable-next-line
function errorHandler(err, req, res, next) {
  console.error('ERROR', err)

  const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined

  res.status(500).send({
    error: err.message,
    stack,
    url: req.originalUrl
  })
}

// app.listen(port)
//   .on('error',     console.error.bind(console))
//   .on('listening', console.log.bind(console, 'Listening on http://0.0.0.0:' + port))


app.listen(port, ()=> console.log(`Server running on port ${port}`))
