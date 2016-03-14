var express=require("express");
var Router=require("express").Router;
var r=module.exports=new Router();
var hfn=require("../util/routehandle");
var jp=require("body-parser").json();


//General Operations on models. make sure add auth or remove it.
r.use("/model",require("./generalModel"));
