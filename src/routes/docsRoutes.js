const express = require('express');
const { getDocs } = require('../controllers/docsController');

const router = express.Router();

// GET /docs
router.get('/', getDocs);

module.exports = router;