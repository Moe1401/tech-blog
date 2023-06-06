const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');


//Post route for a "Post"
router.post('/', withAuth, async (req, res) => {
  console.log("/ postroute")
  try {    
    res.status(200).json(await Post.create({...req.body,
      user_id: req.session.user_id,
    }));
  } catch (err) {
    res.status(400).json(err);
  }
});
//Delete route for a "Post"
router.delete('/:id', withAuth, async (req, res) => {
  console.log("/:id postroute")
  try {
    if (!req.params.id) {
      res.status(404).json({ message: 'No Post found with this id!' });
      return;
    }

    res.status(200).json(await Post.destroy({where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    }));
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
