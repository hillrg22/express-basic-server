const express = require('express')
const app = express()

let port = 3000

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
app.get('/characters/:id', (req,res) =>{
  const id = req.params.id
  const character = characters.filter(character=> {
    return character.id == id
  })[0]
res.json(character)
})




app.listen(3000, ()=> console.log(`Server running on port ${port}`))
