// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function Blocmetrics ()
{

}

Blocmetrics.track = function(name, property_1, property_2){
  var _bm_event = {
      name: "site name",
      property_1: "some value",
      property_2: "some value"
      }

  var _bm_request = new XMLHttpRequest();
  _bm_request.open("POST", "http://localhost:3000/events.json", true);
  _bm_request.setRequestHeader('Content-Type', 'application/json');
  _bm_request.onreadystatechange = function() {
    // this function runs when the Ajax request changes state.
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  };
  _bm_request.send(JSON.stringify(_bm_event));
};