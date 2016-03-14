module.exports = {
  listModel: wrapper(listModel),
  getModel: wrapper(getModel),
  newModel: wrapper(newModel),
  deleteModel:wrapper(deleteModel),
  updateModel:wrapper(updateModel)
}
var models = require("../../models");
var q = require("q");
var log=require("../../log");

function wrapper(func) {
  return function() {
    var args = Array.prototype.slice.call(arguments, 0);
    var res=args[args.length -2];
    var next = args[args.length - 1];
    var modelName = args[0];
    if (models[modelName] && modelName!="init") {
      args[0]=models[modelName];
      return func.apply({},args);
    }else{
      log.error("Try to access model: ",modelName);
      next();
    }
  }
}

function listModel(model) {
  return model.find({});
}

function newModel(model, body) {
  return model.create(body);
}
function updateModel(model,id, body) {
  return model.findById(id)
  .then(function(doc){
    if (doc.beforeUpdateHook) doc.beforeUpdateHook(body);
    return doc.update(body).exec();
  })
}

function deleteModel(model,id){
  return model.findByIdAndRemove(id).exec();
}
function getModel(model,id){
  return model.findById(id);
}
