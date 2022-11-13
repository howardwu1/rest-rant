const express = require('express')
const app = express()
const router = express.Router()



// GET /places
router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thaiDish.jpg'
  }, 
  
  {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/espresso.jpg'
  }]
  
res.render('places/index', {places})
}) 

//GET/places/new
router.get('/new', (req, res) => {


  res.render('places/new')
})


  
module.exports = router




