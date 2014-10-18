
App.Views.SearchResult = Backbone.View.extend({

  template: JST["search_result"],

  render: function () {
    var view = this;
    var renderedContent = this.template({
      message: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});
