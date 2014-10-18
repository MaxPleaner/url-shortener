
App.Views.Root = Backbone.CompositeView.extend({

  template: JST["root"],

  events: {
    "submit #url-form": "submit"
  },

  submit: function (event) {
    event.preventDefault();
    params = $(event.currentTarget).serializeJSON();
    var url = new App.Models.Url(params)
    url.save({}, {
      success: function () {
        var aliasSuccess = new App.Views.AliasSuccess({
          model: url.get("alias")
        })
        this.removeSubviews('.alert-holder')
        this.removeSubviews('.alias-success-holder')
        this.addSubview(".alias-success-holder", aliasSuccess)
      }.bind(this),
      error: function () {
        var alert = new App.Views.Alert({
          model: "not a valid url, sorry"
        })
        this.removeSubviews('.alert-holder')
        this.removeSubviews('.alias-success-holder')
        this.addSubview(".alert-holder", alert)
      }.bind(this)
    })
  },


  render: function () {
    var view = this;
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});
