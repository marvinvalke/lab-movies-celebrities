require('./Celebrity.model')
const mongoose = require('mongoose')
const { Schema, model } = require("mongoose");
const MovieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  pilot: String,
  cast:[{
          type: Schema.Types.ObjectId,
          ref:'CelebrityModel',
       
  }
  ]


  },
);

const MovieModel = mongoose.model("movies", MovieSchema);

module.exports = MovieModel;