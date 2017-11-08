import redis from 'redis';

let client = redis.createClient()
client.on('error', function (err) {
    console.log("Error " + err);
});

class RedisApp {
  static getServer(){
    return client
  }
}

module.exports = RedisApp;
