const express = require('express');

const router = express.Router({ mergeParams: true }); // eslint-disable-line new-cap

router.get('/', (req, res, next) => {
  res.render('checkout', {
    title: 'Check Out'
  });
});

module.exports = router;
