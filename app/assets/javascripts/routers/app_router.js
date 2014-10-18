
App.Routers.AppRouter = Backbone.Router.extend({
  
  initialize: function () {
  },
  
  routes: {
    "": "root",
    "redirector/:id": "redirector"
  },  
  
  redirector: function (id) {
    var redirectView = new App.Views.Redirector({
      model: (new App.Models.Url({id: id}))
    });
    this._swapView(redirectView);
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
