!function($) {
  $.fn['do'] = function(callback, args) {
    callback.apply(this, args);
    return this;
  };
}(this.jQuery || this.Zepto || this.ender);
