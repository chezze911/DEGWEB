// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.validate
//= require jquery.validate.additional-methods
//= require jquery-ui
//= require bootstrap-sprockets
//= require charts
//= require turbolinks
//= require c3
//= require_tree .


console.log("firing application js");

$(document).ready(function(){
  Forms.init();
  ShowMake.init();
});

