import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost:27017/ynov-pwa")
  .then(() => console.log('✅ Successfully connected to the database'))
  .catch((e) => console.log(`⛔️ Error during database connection ${e}`))