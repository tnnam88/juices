var storage = require('node-persist');
storage.initSync({
    dir : "data",
    ttl : false
});
var data = storage.getItemSync('fruit');
console.log(data);
