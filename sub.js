require('dotenv').config()
const mqtt = require('mqtt');
const client  = mqtt.connect(process.env.BROKER_URL);

const si = require('systeminformation');

client.on("connect", () => {
    client.subscribe('/cpuload')
})

client.on('message', (topic, message) => { 
    if(topic === "/cpuload") { 
        console.log(JSON.parse(message)); 
    } 
});

