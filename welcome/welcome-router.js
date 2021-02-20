const express = require('express')

const router = express.Router()

router.get('/', (req,res) => {
   res.status(200).json( {
      message: `Welcome ${process.env.COHORT}`, 
      fact: process.env.FUN_FACT || "No facts" })
})

module.exports = router

// Good practice to have a fallback value for .env variables