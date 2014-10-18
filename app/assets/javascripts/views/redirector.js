App.Views.Redirector = Backbone.View.extend({

  template: JST["redirector"],
  
  initialize: function () {
    this.model.fetch();
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    var view = this;
    var renderedContent = this.template({
      url: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }

});
