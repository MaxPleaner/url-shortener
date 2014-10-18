
App.Views.AliasSuccess = Backbone.View.extend({

  template: JST["alias_success"],

  render: function () {
    var view = this;
    var renderedContent = this.template({
      message: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});
