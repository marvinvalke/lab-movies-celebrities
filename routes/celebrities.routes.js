const CelebrityModel = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
router.get('/celebrities' , (req, res, next)=>{
    CelebrityModel.find()
    .then((celebrities)=>{
        res.render('../views/celebrities/celebrities.hbs' , {celebrities})
    })
    .catch((err)=>{
        next(err)
    })

  
})

router.get('/celebrities/create',(req,res,next)=>{
    res.render('../views/celebrities/new-celebriry.hbs')
})

router.post('/celebrities/create', (req, res, next)=>{
    const {name, occupation, catchPhrase } = req.body
    CelebrityModel.create({name, occupation, catchPhrase})
    .then(()=>{
        res.redirect('/celebrities')
    })
    .catch(()=>{
        res.render('../views/celebrities/new-celebriry.hbs')
    }) 
})



module.exports = router;
