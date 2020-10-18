const express = require('express');
const router = express.Router();

const users = require('./users');
const bets = require('./bets');
const bidders = require('./bidders');


router.use('/users', users);
router.use('/bets', bets);
router.use('/bidders', bidders);


module.exports = router; 