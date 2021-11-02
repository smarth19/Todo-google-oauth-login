require('dotenv').config()
const router = require("express").Router()
const { OAuth2Client } = require('google-auth-library')
const {User} = require("../models/user")

router.get('/googleOauthKey', async (req, res) => {
    try {
        res.status(200).json({data: process.env.GOOGLE_OAUTH_CLIENT_ID})
    } catch (error) {
        console.log(err)
        res.status(500).json({error: "We encountered some error, please try again later"})
    }
})

router.post("/", async (req, res) => {
    try{
        const client = new OAuth2Client(process.env.GOOGLE_OAUTH_CLIENT_ID)
        const ticket = await client.verifyIdToken({
            idToken: req.body.tokenId,
            audience: process.env.GOOGLE_OAUTH_CLIENT_ID
        })
        const payload = ticket.getPayload()
        const { name, email, email_verified } = payload
        if(!email_verified) return res.status(401).json({error: "Get your email verified with Google before registering with us"})
        const ifEmailExists = await User.findOne({email})
        if(ifEmailExists) return res.status(200).json({success: `Welcome Back, ${ifEmailExists.name}`, data: ifEmailExists})
        const newUser = new User({
            name: name,
            email: email
        })
        await newUser.save()
        res.status(200).json({success: `${newUser.name}, Your Account has been Created`, data: newUser})
    }catch(err){
        console.log(err)
        res.status(500).json({error: "We encountered some error, please try again later"})
    }
})

module.exports = router