const express = require ('express')
const app = express()
const PORT = 8000

const characters = {
    'mario': {
        'age': 24,
        'birthday': 'May 27, 1965',
        'species': 'Human',
        'height': '155 cm',
        'fun fact':  'Mario has appeared in over 200 video games. '

    },
    'luigi': {
        'age': 24,
        'birthday': 'May 27, 1965',
        'species': 'Human',
        'height': '160 cm',
        'fun fact':  "Luigi is the only one in the entire Mario franchise to have seen what's under a living Shy Guy's mask."
    },
    'princess peach': {
        'age': 25,
        'birthday': 'January 8, 1965',
        'species': 'Human',
        'height': '160 cm',
        'fun fact':  'Princess Peach has been featured in Forbes Magazine.'
    },
    'princess daisy': {
        'age': 25,
        'birthday': 'April 21, 1985',
        'species': 'Human',
        'height': '159 cm',
        'fun fact':  'Princess Daisy has her very own cruise liner, the Daisy Cruiser. '
    },
    'yoshi': {
        'age': 25,
        'birthday': 'July 15, 1953',
        'species': 'T. Yoshisaur Munchakoopas',
        'height': '140 cm',
        'fun fact':  'In the Super Mario World Japanese version, Yoshi can eat dolphins. '

    },
    'bowser': {
        'age': 25,
        'birthday': 'July 15, 1953',
        'species': 'T. Yoshisaur Munchakoopas',
        'height': '140 cm',
        'fun fact':  'Aside from appearing in countless Nintendo titles, Bowser can also be seen in Wreck-It Ralph.'

    },
    'unknown': {
        'age': 0,
        'birthday': 'unknown',
        'species': 'unknown',
        'height': 'unknown'

    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
}) 

app.get('/api/:name', (request, response) =>{
  const characterName = request.params.name.toLowerCase()
  if( characters[characterName]){
    response.json(characters[characterName])
  } else {
      response.json(characters['unknown'])
  }

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})