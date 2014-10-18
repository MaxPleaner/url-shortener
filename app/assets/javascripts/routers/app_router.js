
App.Routers.AppRouter = Backbone.Router.extend({
  
  initialize: function () {
  },
  
  routes: {
    "": "root",
  },  
  
  root: function () {
    var rootView = new App.Views.Root();
    this._swapView(rootView)
  },
  
  _swapView: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    $('.backbone-holder').html(view.render().$el);
  },
  
});
