  const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const Orders = new Schema({
    orderName:  {type: String},
    boardType:  {type: String},
    boards: {type: Object},
  });

module.exports = mongoose.model('Orders', Orders);