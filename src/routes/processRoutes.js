const express = require('express');
const router = express.Router();
const processController = require('../controllers/processController');

router.get('/', processController.getProcesses);
router.post('/', processController.createProcess);
router.put('/:id', processController.updateProcess);
router.delete('/:id', processController.deleteProcess);

module.exports = router;
