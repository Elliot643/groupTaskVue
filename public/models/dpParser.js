const mongoose = require('mongoose')

class Mongoose {
 
  constructor() {
    this.uri = "mongodb://localhost:27017/hinder"
    //this.uri = "mongodb+srv://user1337:passwordhinder@hinder-h823s.mongodb.net/test?retryWrites=true&w=majority";
  }

  connect(uri) {
    console.log()
    mongoose.connect(this.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify:false
      
    })
    let db = mongoose.connection
    db.on('connected', function () {
      console.log('Database connected')
    }).catch(err=>{console.log(err)})

    db.once('open' , ()=>{
      console.log("success")
    })

     process.on("SIGINT", function() {
       db.close(function() {
         console.log("Mongoose connection disconnected through app termination.")
         process.exit(0);
       })
    })

  }

}

module.exports = Mongoose;