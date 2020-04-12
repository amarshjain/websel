const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator');

const User = require('../../models/User');
const Website = require('../../models/Website');


// POST api/website
// Post website
// Private

router.post('/', [auth, [
    check('title', 'title is required').not().isEmpty(),
    check('link', 'link is required').not().isEmpty(),
    check('techStack', 'tech stack is required').not().isEmpty(),
    check('responsive', 'Is it responsive or not').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }

    try {
        const user = await User.findById(req.user.id).select('-password');
    const newWeb = new Website ({
        title: req.body.title,
        developer: user.name,
        link: req.body.link,
        iconurl: req.body.iconurl,
        techStack: req.body.techStack,
        desc: req.body.desc,
        githublink: req.body.githublink,
        responsive: req.body.responsive,
        priceRange: req.body.priceRange,
        user: req.user.id
    });

    const website = await newWeb.save();
    res.json(website);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

    
});

// GET api/websites
// Get all websites
// Private
router.get('/', auth, async (req, res) => {
    try {
        const website = await Website.find().sort({ date: -1 });
        res.json(website);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// GET api/websites/:id
// Get websites by ID
// Private
router.get('/:id', auth, async (req, res) => {
    try {
        const website = await Website.findById(req.params.id);
        if(!website){
            return res.status(404).json({msg: 'Website Not Found'})
        }
        res.json(website);
    } catch (err) {
        console.error(err.message);
        if(err.kind == 'ObjectId') {
            return res.status(404).json({msg: 'Website not find'})
        }
        res.status(500).send('Server Error');
    }
});

// DELETE api/websites/:id
// Delete a website
// Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const website = await Website.findById(req.params.id);

        if(!website){
            return res.status(404).json({msg: 'Website Not Found'})
        }
        // Check user
        if(website.user.toString() !== req.user.id) {
            return res.status(401).json({msg: 'User not Authorized'});
        }
        await website.remove();

        res.json({msg: 'Website removed'});
    } catch (err) {
        console.error(err.message);
        if(err.kind == 'ObjectId') {
            return res.status(404).json({msg: 'Website not find'})
        }
        req.status(500).send('Server Error');
    }
});

module.exports = router;