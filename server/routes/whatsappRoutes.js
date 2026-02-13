const { initializeWhatsApp, activateByQr, getWhatsStatus, sendWhatsMessage, closeWhatsapp } = require("../controllers/whatsappController")
const allowedTo = require("../middleware/allowedTo")
const verifyToken = require("../middleware/verifyToken")
const { user_roles } = require("../tools/constants/rolesConstants")
const createError = require("../tools/createError")
const { FAILED } = require("../tools/statusTexts")

const router = require("express").Router()

const refuse = (req, res, next) => {
    const user = req.user
    if(user.userName === 'admin1'){
        return next()
    }
    
    return next(createError('Whatsapp Can`t be started in Testing Mode', 400, FAILED))
}

router.route("/userId/init")
    .get(verifyToken(), allowedTo(user_roles.ADMIN, user_roles.SUBADMIN),refuse, initializeWhatsApp)

router.route("/userId/close")
    .get(verifyToken(), allowedTo(user_roles.ADMIN, user_roles.SUBADMIN),refuse, closeWhatsapp)

router.route("/userId/qr")
    .get(activateByQr)

router.route("/userId/status")
    .get(getWhatsStatus)

router.route("/userId/send")
    .post(verifyToken(), refuse,sendWhatsMessage)

module.exports = router