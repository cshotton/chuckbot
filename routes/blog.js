var express = require('express');
var router = express.Router();


function BotHandler (req, res, next) {
  var userName = req.body.user_name;
  var blogText = req.body.text;
  
  // do something here to post RSS, etc.
  
  // now respond to the slack group with something sensible
  var botPayload = {
    text : 'Blogging a note from ' + userName + '!' + ' Doing something smart with: "' + blogText + '"'
  };
 
  // avoid infinite loop
  if (userName !== 'ChuckBot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}

/* GET bot response page. */
router.get('/', BotHandler);

/* POST bot response page. */
router.post('/', BotHandler);

module.exports = router;
