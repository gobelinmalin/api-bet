const express = require('express');
const router = express.Router();

const users = require('./users');
const bets = require('./bets');
const bidders = require('./bidders');
const friends = require('./friends');



router.use('/users', users);
router.use('/bets', bets);
router.use('/bidders', bidders);
router.use('/friends', friends);


module.exports = router; 