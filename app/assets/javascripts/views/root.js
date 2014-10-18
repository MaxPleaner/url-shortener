
App.Views.Root = Backbone.View.extend({

  template: JST["root"],

  render: function () {
    var view = this;
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});
