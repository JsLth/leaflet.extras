LeafletWidget.methods.addControlGPS=function(t){(function(){var o=this;o.gpscontrol&&(o.gpscontrol.remove(o),delete o.gpscontrol),o.gpscontrol=new L.Control.Gps(t),o.gpscontrol.on("gps:located",(function(t){HTMLWidgets.shinyMode&&Shiny.onInputChange(o.id+"_gps_located",{coordinates:t.latlng,radius:t.marker._radius})})),o.gpscontrol.on("gps:disabled",(function(){HTMLWidgets.shinyMode&&Shiny.onInputChange(o.id+"_gps_disabled",{})})),o.gpscontrol.addTo(o)}).call(this)},LeafletWidget.methods.removeControlGPS=function(){(function(){var t=this;t.gpscontrol&&(t.gpscontrol.remove(t),delete t.gpscontrol)}).call(this)},LeafletWidget.methods.activateGPS=function(){(function(){this.gpscontrol&&this.gpscontrol.activate()}).call(this)},LeafletWidget.methods.deactivateGPS=function(){(function(){this.gpscontrol&&this.gpscontrol.deactivate()}).call(this)},LeafletWidget.methods.getLocation=function(){return function(){if(this.gpscontrol)return this.gpscontrol.getLocation();throw"GPS Control not added to the map"}.call(this)};
//# sourceMappingURL=lfx-gps-bindings.js.map