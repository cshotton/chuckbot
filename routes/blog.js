var express = require('express');
var router = express.Router();


function BotHandler (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Blogging a note from ' + userName + '!'
  };
 
  // avoid infinite loop
  if (userName !== 'ChuckBot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
//  res.send('respond with a bot response');
}

/* GET bot response page. */
router.get('/', BotHandler);

/* POST bot response page. */
router.post('/', BotHandler);

module.exports = router;
