exports.get=get;
exports.set=set;
var def={
  "PORT":6002,
  "MONGO_DB":"mongodb://localhost/gym_dev"
};

var dynamic={

};

function get(key){
  return typeof dynamic[key]!=="undefined"?dynamic[key]:typeof process.env[key]!=="undefined"?process.env[key]:def[key];
}
function set (key,val){
   dynamic[key]=val;
}
