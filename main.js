const fs = require("fs");
const mqtt = require('mqtt')

/* get the config.json file object */
const conf = JSON.parse(fs.readFileSync("./config.json"));

/* connect with specified broker details*/
const pubClient = mqtt.connect(conf.mqtt.broker)

pubClient.on('connect', () => {
    console.log("Connected succesfully with mqtt broker..!!");
})

/* data to publish */
const pubIntrvl = setInterval(() => pubClient.publish('/test', '{"data": "received"}'), 2000)
