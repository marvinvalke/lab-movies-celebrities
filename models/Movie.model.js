require("./Celebrity.model");

const { Schema, model } = require("mongoose");
const MovieSchema = new Schema({
  title: String,
  genre: String,
  pilot: String,
  cast: {
    type: [Schema.Types.ObjectId],
    ref: "celebrities",
  },
});

const MovieModel = model("movies", MovieSchema);

module.exports = MovieModel;

//SPECIAL THANKS TO THE RUBBER DUCKS CREW : HAUKE - MAIK - RODRIGO - MARCOS 
// LOVE YOU GUYS
