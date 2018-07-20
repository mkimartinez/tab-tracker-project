const {User} = require('../models')


module.exports = {
	async register (req,res){
		try{
			const user = await User.create(req.body)
			// console.log(user)
			res.send(user.toJSON())
		} catch(err){
			res.status(400).send({
				error: 'This email already in use'
			})
		}
	 	
 }
}