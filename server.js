const express = require ('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const characters = {
    'mario': {
        'birthday': 'May 27, 1965',
        'species': 'Human',
        'height': '155 cm',
        'funFact':  "Mario doesn't have a last name. This basically means that Mario is on a Madonna or Cher level-tier of cool and doesn't need extra words to tie him down."

    },
    'luigi': {
        'birthday': 'May 27, 1965',
        'species': 'Human',
        'height': '160 cm',
        'funFact':  "Luigi is the only one in the entire Mario franchise to have seen what's under a living Shy Guy's mask."
    },
    'princess peach': {
        'birthday': 'January 8, 1965',
        'species': 'Human',
        'height': '160 cm',
        'funFact':  'Princess Peach has been featured in Forbes Magazine.'
    },
    'princess daisy': {
        'birthday': 'April 21, 1985',
        'species': 'Human',
        'height': '159 cm',
        'funFact':  'Princess Daisy has her very own cruise liner, the Daisy Cruiser. '
    },
    'yoshi': {
        'birthday': 'July 15, 1953',
        'species': 'T. Yoshisaur Munchakoopas',
        'height': '140 cm',
        'funFact':  'In the Super Mario World Japanese version, Yoshi can eat dolphins. '

    },
    'bowser': {
        'birthday': 'July 15, 1953',
        'species': 'T. Yoshisaur Munchakoopas',
        'height': '140 cm',
        'funFact':  "He is a hard-working single dad. Bowser's goal to kidnap Peach has at time been explained as him trying to find a mother for his kids. As an idea, it is terribly misguided, so the poor guy has to be getting desperate."

    },
    'toad': {
        'birthday': 'July 30, 1970',
        'species': 'Toad; Formerly Mushroom Retainers',
        'height': '42 cm',
        'funFact':  'He is bald underneath his large mushroom hat.'

    },
    'waluigi': {
        'birthday': 'July 21, 2000',
        'species': 'Human',
        'height': '234 cm',
        'funFact':  "He has Salavdor Dali's Mustache."

    },
    'wario': {
        'birthday': 'October 21, 1992',
        'species': 'Human',
        'height': '179 cm',
        'funFact':  "Waluigi isn't his brother."

    },
    'kamek': {
        'birthday': 'November 21, 1990',
        'species': 'Magikoopa',
        'height': '155 cm',
        'funFact':  'He is an old, yet powerful Magikoopa and apparent advisor to Bowser as well as a father figure to Bowser in his youth.'

    },
    'birdo': {
        'birthday': 'February 14, 1985',
        'species': 'birdo',
        'height': 'unknown',
        'funFact':  "A pink Birdo is able to only shoot eggs from her snout-like mouth. A green Birdo actually doesn't have this power and actually shoots fireballs. A red Birdo, however, can actually shoot eggs and fireballs, making it to likely be the strongest Birdo of the species."

    },
    'rosalina': {
        'birthday': 'November 1, 2007',
        'species': 'Human',
        'height': '221 cm',
        'funFact':  'Rosalina is the Princess of the Galaxy.'

    },
    'bowser jr': {
        'birthday': 'September 28, 2008',
        'species': 'Koopa',
        'height': '140 cm',
        'funFact':  "Bowser Jr. wears a white bib where there's a drawing of fangs resembling his father's mouth."

    },
    'donkey kong': {
        'birthday': 'July 9, 1981',
        'species': 'Kong',
        'height': '238 cm',
        'funFact':  "Donkey Kong's movements are based on those of a horse, not a Gorilla as the developers thought the Gorillas moves weren't up to scratch."

    },
    'diddy kong': {
        'birthday': 'November 21, 1994',
        'species': 'Spider Monkey',
        'height': '118 cm',
        'funFact':  "Diddy Kong is Donkey Kong's Nephew."

    },
    'toadette': {
        'birthday': 'January 12, 1972',
        'species': 'Toad',
        'height': '66 cm',
        'funFact':  'Yoshi and Toadette are tied as the fastest runners.'

    },
    'koopalings': {
        'birthday': 'N/A',
        'species': 'Koopa',
        'height': 'N/A',
        'funFact':  "The Koopalings were modeled after the design team of Super Mario Bros. 3 and they were all named after famous musicians by the game's North American localizers."

    },
    'blooper': {
        'birthday': 'N/A',
        'species': 'Squid',
        'height': 'N/A',
        'funFact':  'Bloopers seem to have their own language. It mainly consists of derivatives of the word "bloop".'

    },
    'shy guy': {
        'birthday': 'N/A',
        'species': 'Shy guy',
        'height': '128 cm',
        'funFact':  "Shy Guy's proud of his finely-honed style and loves to surprise people who underestimate him because of his height."

    },
    'captain toad': {
        'birthday': 'N/A',
        'species': 'Toad',
        'height': 'N/A',
        'funFact':  'Captain Toad is also a skilled mechanic, as seen in the Galaxy games where he is able to fix the Starshroom.'

    },
    'king boo': {
        'birthday': 'N/A',
        'species': 'Boo',
        'height': 'N/A',
        'funFact':  "It is possible that King Boo's malicious and destructive behavior following his first defeat was a result of his new magical crown corrupting him and driving him to madness."

    },
    'petey piranha': {
        'birthday': 'N/A',
        'species': 'Piranha Plant',
        'height': '140 cm',
        'funFact':  "Petey's favorite foods are carrots and chimichangas."

    },
    'kammy koopa': {
        'birthday': 'N/A',
        'species': 'Magikoopa',
        'height': '140 cm',
        'funFact':  "Although Bowser outright disrespects her quite often, usually directly in her presence, Kammy appears totally devoted to him and is often shown in his company."
    },
    'dry bones': {
        'birthday': 'N/A',
        'species': 'Koopa Troopa',
        'height': '150 cm',
        'funFact':  "Dry Bones usually cannot be defeated permanently, since they will always reattach their head to its body in a matter of seconds."
    },

    'baby luma': {
        'birthday': 'N/A',
        'species': 'Cosmic Star',
        'height': '45 cm',
        'funFact':  'Baby Luma was found in a rusted spaceship by a young Rosalina.'

    },
    'hookbill the koopa': {
        'birthday': 'N/A',
        'species': 'Big Koopa Troopa',
        'height': 'N/A',
        'funFact': 'Favorite Fashion Tip: Tortoise-shell frames are you, baby!'

    },
    'cranky kong': {
        'birthday': 'N/A',
        'species': 'Kong',
        'height': 'N/A',
        'funFact': 'Donkey Kong Jr., Cranky Kong, and Wrinkly Kong are the only known Kongs who know how to do math correctly.'

    },
    'boo': {
        'birthday': 'N/A',
        'species': 'ghost',
        'height': 'N/A',
        'funFact': "Boo's Japanese Name is Theresa (yes, really). It comes from the Japanese words meaning 'to be shy'."

    },
    'unknown': {
        'age': 0,
        'birthday': 'unknown',
        'species': 'unknown',
        'height': 'unknown',
        'funFact': 'unknown'
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