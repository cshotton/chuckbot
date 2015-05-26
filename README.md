# chuckbot
chuckbot is a node.js Slack bot example. It currently looks for an outbound
webhook to the URL /blog

See routes/blog.js for the meat of the app.

To run:

    cd chuckbot
    npm install
    npm start

Note, you may need to edit the package.json file to change the start script to specify
node instead of nodejs or vice versa if the npm start command fails.
