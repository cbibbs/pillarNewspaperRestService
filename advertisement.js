var advertStorrage  = require("persistance/advertisements");
var spromise        = require("spromise");

var ready = spromise.when(advertStorrage.ready);



  var adName;

  this.getName = function(){
    return adName;
  };

  this.setName = function(newName){
        adName = newName;
  };

  this.getID = function(){
      return 1;
  };

function advertisement() {
  this.initialize();
  var adName;
}


function initialize(options) {
  options     = options || {};
  this.active = {};
  this.ready  = ready;
}

function insert_advertisement(name) {
    return spromise(function(resolve){
        var _msg = {
            "advertisementName": name
        };

        advertStorrage.insert(_msg);
        resolve();
    });
}

function new_ad(data) {
    insert_advertisement(data);
    return;
}

function id() {
    return this.getID();
}

function advertisementList() {
    return spromise(function(resolve){
    var query = {};

    advertStorrage.find(query, function(err, advertStorrage) {
      resolve(advertStorrage);
    });
  });
}


module.exports.initialize = initialize;
module.exports.new_ad = new_ad;
module.exports.id = this.getID;
module.exports.name = this.getName;
module.exports.adList = advertisementList;

