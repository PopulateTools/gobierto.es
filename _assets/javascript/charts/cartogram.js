'use strict';

var cartogram = Class.extend({
  init: function(containerId){
    console.log('init.cartogram');
    
    this.data = null;
  },
  getData: function() {
    queue()
      .defer(d3.json, '/data/es-provinces.v1.json')
      .await(function(error, es) {
        this.data = es;
        
        this.updateRender();
      }.bind(this));
  },
  render: function() {
    if (this.data === null) {
      this.getData();
    } else {
      this.updateRender();
    }
  },
  updateRender: function(callback) {
    console.log('updaterender');
    console.log(this.data);
  },
});
