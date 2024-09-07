/*! Version: 0.6.1
Date: 2024-08-21 */
L.Control.GroupedLayers=L.Control.extend({options:{sortLayers:!0,sortGroups:!0,sortBaseLayers:!1,collapsed:!0,position:"topright",autoZIndex:!0,exclusiveGroups:[],groupCheckboxes:!1,groupsCollapsable:!1,groupsExpandedClass:"leaflet-control-layers-group-collapse-default",groupsCollapsedClass:"leaflet-control-layers-group-expand-default",sortFunction:function(e,t){return t>e?-1:e>t?1:0}},initialize:function(e,t,a){var s,o;for(s in L.Util.setOptions(this,a),this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._groupList=[],this._domGroups=[],e)this._addLayer(e[s],s);for(s in t)for(o in t[s])this._addLayer(t[s][o],o,s,!0)},onAdd:function(e){return this._initLayout(),this._update(),e.on("layeradd",this._onLayerChange,this).on("layerremove",this._onLayerChange,this),this._container},addTo:function(e){return L.Control.prototype.addTo.call(this,e),this._expandIfNotCollapsed()},onRemove:function(e){e.off("layeradd",this._onLayerChange,this).off("layerremove",this._onLayerChange,this)},addBaseLayer:function(e,t){return this._addLayer(e,t),this._update(),this},addOverlay:function(e,t,a){return this._addLayer(e,t,a,!0),this._update(),this},removeLayer:function(e){var t=L.Util.stamp(e),a=this._getLayer(t);return a&&this._layers.splice(this._layers.indexOf(a),1),this._update(),this},_getLayer:function(e){for(var t=0;t<this._layers.length;t++){var a=this._layers[t];if(a&&L.stamp(a.layer)===e)return a}},_initLayout:function(){var e="leaflet-control-layers",t=this._container=L.DomUtil.create("div",e),a=this.options.collapsed;t.setAttribute("aria-haspopup",!0),L.DomEvent.disableClickPropagation(t),L.DomEvent.disableScrollPropagation(t);var s=this._form=L.DomUtil.create("form",e+"-list");a&&(this._map.on("click",this._collapse,this),L.Browser.android||L.DomEvent.on(t,{mouseenter:this._expand,mouseleave:this._collapse},this));var o=this._layersLink=L.DomUtil.create("a",e+"-toggle",t);o.href="#",o.title="Layers",L.Browser.touch?(L.DomEvent.on(o,"click",L.DomEvent.stop),L.DomEvent.on(o,"click",this._expand,this)):L.DomEvent.on(o,"focus",this._expand,this),a||this._expand(),this._baseLayersList=L.DomUtil.create("div",e+"-base",s),this._separator=L.DomUtil.create("div",e+"-separator",s),this._overlaysList=L.DomUtil.create("div",e+"-overlays",s),t.appendChild(s)},_addLayer:function(e,t,a,s){var o={layer:e,name:t,overlay:s};this._layers.push(o),a=a||"";var r=this._indexOf(this._groupList,a);-1===r&&(r=this._groupList.push(a)-1);var l=-1!==this._indexOf(this.options.exclusiveGroups,a);o.group={name:a,id:r,exclusive:l},this.options.autoZIndex&&e.setZIndex&&(this._lastZIndex++,e.setZIndex(this._lastZIndex)),this.options.sortLayers&&this._layers.sort(L.bind((function(e,t){return 1==e.overlay&&1==t.overlay?this.options.sortFunction(e.name,t.name):void 0}),this)),this.options.sortBaseLayers&&this._layers.sort(L.bind((function(e,t){return null==e.overlay&&null==t.overlay?this.options.sortFunction(e.name,t.name):void 0}),this)),this.options.sortGroups&&this._layers.sort(L.bind((function(e,t){return this.options.sortFunction(e.group.name,t.group.name)}),this)),this._expandIfNotCollapsed()},_update:function(){if(this._container){this._baseLayersList.innerHTML="",this._overlaysList.innerHTML="",this._domGroups.length=0;for(var e=!1,t=!1,a=0;a<this._layers.length;a++){var s=this._layers[a];this._addItem(s),t=t||s.overlay,e=e||!s.overlay}this.options.groupCheckboxes&&this._refreshGroupsCheckStates(),this._separator.style.display=t&&e?"":"none"}},_onLayerChange:function(e){var t,a=this._getLayer(L.Util.stamp(e.layer));a&&(this._handlingClick||this._update(),(t=a.overlay?"layeradd"===e.type?"overlayadd":"overlayremove":"layeradd"===e.type?"baselayerchange":null)&&this._map.fire(t,a))},_createRadioElement:function(e,t){var a=document.createElement("input");return a.type="radio",a.name=e,a.className="leaflet-control-layers-selector",a.checked=t,a},_addItem:function(e){var t,a,s,o=document.createElement("label"),r=this._map.hasLayer(e.layer);e.overlay?e.group.exclusive?(s="leaflet-exclusive-group-layer-"+e.group.id,t=this._createRadioElement(s,r)):((t=document.createElement("input")).type="checkbox",t.className="leaflet-control-layers-selector",t.defaultChecked=r):t=this._createRadioElement("leaflet-base-layers",r),t.layerId=L.Util.stamp(e.layer),t.groupID=e.group.id,L.DomEvent.on(t,"click",this._onInputClick,this);var l=document.createElement("span");if(l.innerHTML=" "+e.name,o.appendChild(t),o.appendChild(l),e.overlay){a=this._overlaysList;var i=this._domGroups[e.group.id];if(!i){(i=document.createElement("div")).className="leaflet-control-layers-group",i.id="leaflet-control-layers-group-"+e.group.id;var n=document.createElement("label");if(n.className="leaflet-control-layers-group-label",""!==e.group.name&&!e.group.exclusive&&this.options.groupCheckboxes){var c=document.createElement("input");c.type="checkbox",c.className="leaflet-control-layers-group-selector",c.groupID=e.group.id,c.legend=this,L.DomEvent.on(c,"click",this._onGroupInputClick,c),n.appendChild(c)}if(this.options.groupsCollapsable){i.classList.add("group-collapsable"),i.classList.add("collapsed");var h=document.createElement("span");h.className="leaflet-control-layers-group-collapse "+this.options.groupsExpandedClass,n.appendChild(h);var p=document.createElement("span");p.className="leaflet-control-layers-group-expand "+this.options.groupsCollapsedClass,n.appendChild(p),L.DomEvent.on(n,"click",this._onGroupCollapseToggle,i)}var d=document.createElement("span");d.className="leaflet-control-layers-group-name",d.innerHTML=e.group.name,n.appendChild(d),i.appendChild(n),a.appendChild(i),this._domGroups[e.group.id]=i}a=i}else a=this._baseLayersList;return a.appendChild(o),o},_onGroupCollapseToggle:function(e){L.DomEvent.stopPropagation(e),L.DomEvent.preventDefault(e),this.classList.contains("group-collapsable")&&this.classList.contains("collapsed")?this.classList.remove("collapsed"):this.classList.contains("group-collapsable")&&!this.classList.contains("collapsed")&&this.classList.add("collapsed")},_onGroupInputClick:function(e){L.DomEvent.stopPropagation(e);var t=this.legend;t._handlingClick=!0;for(var a=t._form.getElementsByTagName("input"),s=0;s<a.length;s++){var o=a[s];if(o.groupID===this.groupID&&"leaflet-control-layers-selector"===o.className){o.checked=this.checked;var r=t._getLayer(o.layerId);o.checked&&!t._map.hasLayer(r.layer)?t._map.addLayer(r.layer):!o.checked&&t._map.hasLayer(r.layer)&&t._map.removeLayer(r.layer)}}t._handlingClick=!1},_onInputClick:function(){var e,t,a=this._form.getElementsByClassName("leaflet-control-layers-selector");this._handlingClick=!0;for(var s=0;s<a.length;s++){var o=a[s];if(L.DomUtil.hasClass(o,"leaflet-control-layers-selector")){var r=this._getLayer(o.layerId);o.checked&&!this._map.hasLayer(r.layer)?t=r.layer:!o.checked&&this._map.hasLayer(r.layer)&&(e=r.layer)}}void 0!==e&&this._map.removeLayer(e),void 0!==t&&this._map.addLayer(t),this.options.groupCheckboxes&&this._refreshGroupsCheckStates(),this._handlingClick=!1},_refreshGroupsCheckStates:function(){for(var e=0;e<this._domGroups.length;e++){var t=this._domGroups[e];if(t){var a=t.getElementsByClassName("leaflet-control-layers-group-selector")[0],s=t.querySelectorAll("input.leaflet-control-layers-selector"),o=t.querySelectorAll("input.leaflet-control-layers-selector:checked");a&&(a.indeterminate=!1,o.length===s.length?a.checked=!0:0===o.length?a.checked=!1:a.indeterminate=!0)}}},_expand:function(){L.DomUtil.addClass(this._container,"leaflet-control-layers-expanded"),this._form.style.height=null;var e=this._map.getSize().y-(this._container.offsetTop+50);return e<this._form.clientHeight?(L.DomUtil.addClass(this._form,"leaflet-control-layers-scrollbar"),this._form.style.height=e+"px"):L.DomUtil.removeClass(this._form,"leaflet-control-layers-scrollbar"),this},_expandIfNotCollapsed:function(){return console.log("_expandIfNotCollapsed"),this._map&&!this.options.collapsed&&(console.log("expand this"),this._expand()),this},_collapse:function(){this._container.className=this._container.className.replace(" leaflet-control-layers-expanded","")},_indexOf:function(e,t){for(var a=0,s=e.length;s>a;a++)if(e[a]===t)return a;return-1}}),L.control.groupedLayers=function(e,t,a){return new L.Control.GroupedLayers(e,t,a)};