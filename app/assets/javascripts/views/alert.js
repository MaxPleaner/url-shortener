
App.Views.Alert = Backbone.View.extend({

  template: JST["alert"],

  render: function () {
    var view = this;
    var renderedContent = this.template({
      message: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});
