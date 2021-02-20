const express = require("express")
const shoutsModel = require("./shouts-model")

const router = express.Router()

// ASYNC AWAIT SYNTAX=======================
// Adding "await" before a function makes it
// return a promise()  // also -> async function fooBar()

router.get("/", async (req, res, next) => {
	// shoutsModel.find()
	// 	.then((data) => res.status(200).json(data))
   //    .then((nextData) => anotherFunction() )
   // 	.catch((err) => next(err))

   // CAN HAVE AS MANY TRY/CATCH AS NEEDED ( LIKE IF/ELSE ) 
   try {
      // adding await before function allows asyncronous return
      const data = await shoutsModel.find()
      // more promises in same format if needed
      // await anotherFunction()
      // await anotherFunction()
      // await anotherFunction()
      res.status(200).json(data)

   } catch(err){
      next(err)
   }
})

router.get("/:id", validateShoutId(), (req, res, next) => {
	res.status(200).json(req.shout)
})

// ASYNC AWAIT SYNTAX
router.post("/", async (req, res, next) => {
   try{
      const data = await shoutsModel.add(req.body)
      res.status(201).json(data)
   }catch(err){
      next(err)
   }

	// shoutsModel.add(req.body)
	// 	.then((data) => res.status(201).json(data))
	// 	.catch((err) => next(err))
})

// ASYNC AWAIT SYNTAX
router.delete("/:id", validateShoutId(), async (req, res, next) => {
   try{
      await Shouts.remove(req.params.id) // **don't need to save to a variable
      res.status(204).end()
   }catch(err){
      next(err)
   }
	// Shouts.remove(req.params.id)
	// 	.then(() => res.status(204).end())
	// 	.catch((err) => next(err))
})

//ASYNC AWAIT SYNTAX
function validateShoutId() {
	return async (req, res, next) => {
      try {
         const shout = await shoutsmodel.findById(req.params.id)

         if (shout) {
            req.shout = shout
            next()
         }else{
            res.status(404).json( { message: "Could Not Find"})
         }
      }catch(err){
         next(err)
      }

		// shoutsModel.findById(req.params.id)
		// 	.then((shout) => {
		// 		if (shout) {
		// 			req.shout = shout
		// 			next()
		// 		} else {
		// 			res.status(404).json({
		// 				message: "Could not find shout",
		// 			})
		// 		}
		// 	})
		// 	.catch(next)
	}
}

module.exports = router