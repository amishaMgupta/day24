const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');

router.get('/all', auth, authorize('Admin'), (req, res) => {
    res.json({ message: `Welcome ${req.user.role}, this is the admin-only page.` });
});

router.get('/profile', auth, authorize('Admin','User'), (req, res) => {
    res.json({ message: `Welcome ${req.user.role}, this is your profile.` });
})

module.exports = router;