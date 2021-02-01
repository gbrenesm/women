const mongoose = require('mongoose');

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(x => { 
  console.log(`Connected to MongoDB 💾 ${x.connections[0].name}`)
})
.catch(error => {
  console.log(`Error connecting to MongoDB`, error)
  process.exit(1)
})