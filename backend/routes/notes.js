const router = require("express").Router()
const {User, Note} = require("../models/user")

const validateUser = async (req, res, next) => {
    try {
        const userId = req.body.userId
        const ifExist = await User.findById(userId)
        if(!ifExist) return res.status(404).json({error: "Invalid User"})
        req.user = ifExist
        next()
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "We encountered some error, Please try again later"})
    }
}

router.post('/', validateUser, async (req, res) => {
    try {
        const {title, detail} = req.body
        if(!title || !detail) return res.status(404).json({error: "Incomplete data"})
        const newNote = new Note({title, detail})
        await User.findByIdAndUpdate(req.user._id, {$push: {notes: newNote}})
        res.status(200).json({success: "Note has been added", data: newNote})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "We encountered some error, Please try again later"})
    }
})

router.patch("/", validateUser, async (req, res) => {
    try {
        const {title, detail, noteId} = req.body
        if(!title || !detail || !noteId) return res.status(404).json({error: "Incomplete data"})
        await User.findOneAndUpdate({_id: req.user._id, "notes._id": noteId}, {$set: {"notes.$.title": title, "notes.$.detail": detail}})
        res.status(200).json({success: "Note Updated Successfuly"})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "We encountered some error, Please try again later"})
    }
})

router.delete("/", validateUser, async (req, res) => {
    try {
        const {noteId} = req.body
        if(!noteId) return res.status(404).json({error: "Incomplete data"})
        await User.findOneAndUpdate({_id: req.user._id}, {$pull: {notes: {_id: noteId}}})
        res.status(200).json({success: "Note Deleted Successfuly"})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "We encountered some error, Please try again later"})
    }
})

module.exports = router