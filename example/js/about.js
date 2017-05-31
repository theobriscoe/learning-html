'use strict';

$.get("nav-bar.html", function(data){
    $("#nav-bar-placeholder").replaceWith(data);
});