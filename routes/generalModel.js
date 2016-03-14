var express=require("express");
var Router=require("express").Router;
var r=module.exports=new Router();
var hfn=require("../util/routehandle");
var jp=require("body-parser").json();

r.get("/:modelName",hfn(require("../api/general").listModel,["params.modelName"]));
r.get("/:modelName/:id",hfn(require("../api/general").getModel,["params.modelName","params.id"]));
r.post("/:modelName",jp,hfn(require("../api/general").newModel,["params.modelName","body"]));
r.delete("/:modelName/:id",hfn(require("../api/general").deleteModel,["params.modelName","params.id"]));
r.put("/:modelName/:id",jp,hfn(require("../api/general").updateModel,["params.modelName","params.id","body"]));
