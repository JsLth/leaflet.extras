LeafletWidget.methods.addPulseMarkers=function(e,t,i,n,c,l,o,a,r,s,u,d){(function(){let p,g;if(i&&(p=(new LeafletWidget.DataFrame).cbind(i),g=function(e){var t=p.get(e);return t?(t.iconSize=[t.iconSize,t.iconSize],new L.icon.pulse(t)):new L.icon.pulse}),!$.isEmptyObject(e)&&!$.isEmptyObject(t)||$.isNumeric(e)&&$.isNumeric(t)){var f=(new LeafletWidget.DataFrame).col("lat",e).col("lng",t).col("layerId",n).col("group",c).col("popup",o).col("popupOptions",a).col("label",u).col("labelOptions",d).cbind(l);i&&(p.effectiveLength=f.nrow()),LeafletWidget.methods.addGenericMarkers(this,f,c,r,s,(function(e,t){var n=e.get(t);return i&&(n.icon=g(t)),L.marker([e.get(t,"lat"),e.get(t,"lng")],n)}))}}).call(this)};