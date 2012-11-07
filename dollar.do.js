;(function($) {
  $.fn.do = function(callback, args) {
    callback.apply(this, args || []);
    return this;
  };
}).call(this.jQuery || this.Zepto || this.ender);
