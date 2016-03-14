var q=require("q");
var log=require("./log");
var env=require("./env");
q.all([
  require("./models").init()
])
.then(function(){
  var express=require("express");
  var app=express();
  log.info("Components initialise finished. Start the server now");

  app.use("/api",require("./routes/api.js"));
  app.listen(env.get("PORT"),function(){
    log.info("Server started at: http://127.0.0.1:"+env.get("PORT"));
  });
})
.fail(function(err){
  log.error(err);
  process.exit();
})
