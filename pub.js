require('dotenv').config()
const mqtt = require('mqtt');
const client  = mqtt.connect(process.env.BROKER_URL);

const si = require('systeminformation');

const publishCpuLoad = () => {
    si.currentLoad().then(data => {
        payload = {
            "currentLoad": data.currentLoad,
            "timestamp": Date.now()
        }
        console.log(payload)
        client.publish('/cpuload', JSON.stringify(payload))
    });
}

client.on("connect",function(connack){   
    console.log("client connected"); 
    setInterval(publishCpuLoad, 1000);
 }) 

