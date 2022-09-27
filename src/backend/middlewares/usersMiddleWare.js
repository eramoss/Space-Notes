const validateBody = (req,res,next) => {
    const { body } = req
    
    if (body.email === undefined) {
       return res.status(400).json({massage: 'the field email is required'})
    }
    if (body.email === '') {
       return res.status(400).json({massage: 'email cannot be empty'})
    }

    if (body.password === undefined) {
       return res.status(400).json({massage: 'the field password is required'})
    }
    if (body.password === '') {
       return res.status(400).json({massage: 'password cannot be empty'})
    }

    next()
}

module.exports = {
    validateBody
}