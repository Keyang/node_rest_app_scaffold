var mongoose=require("mongoose");
var q=require("q");
var env=require("../env");
module.exports={
  init:init
};
var inited=false;
function init(){
  if (!inited){
    inited=true;
    mongoose.Promise=q.Promise;
    var defer=q.defer();
    mongoose.connect(env.get("MONGO_DB"),defer.makeNodeResolver());
    return defer.promise
  }else{
    return q();
  }
}
