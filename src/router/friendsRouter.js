const express = require(`express`)

const {
    createFriend,
    getFriend,
    getFriends,
    updateFriend,
    deleteFriend,
    search,
    SignIn,
    uploadAvatar
} = require(`../controller/friend`)

const verifyToken = require('../middleware/verifyToken')
const upload = require('../utilis/upload')

const router = express.Router()

router.get(`/`,verifyToken, getFriends)
router.post(`/`, createFriend)
router.post(`/login`, SignIn)
router.get(`/:personId`, getFriend)
router.put(`/:personId`, updateFriend)
router.delete(`/:personId`, deleteFriend)
router.get(`/search/all`, search)
router.post('/upload-avatar',verifyToken, upload.single('avatar'), uploadAvatar)


module.exports = router