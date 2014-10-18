
App.Views.Root = Backbone.CompositeView.extend({

  template: JST["root"],

  events: {
    "submit #url-form": "submit",
    "submit #url-list": "showMatches"
  },

  showMatches: function (event) {
    event.preventDefault();
    params = $(event.currentTarget).serializeJSON();
    this.url = new App.Models.Url(params);
    this.url.url = "/api/urls/search"
    this.url.save({}, {
      success: function () {
        this.removeSubviews(".search-results");
        this.$(".search-results").empty()
        this.hasMatch = false;
        for (var key in this.url.attributes) {
          alias = this.url.attributes[key].alias
          if (alias) {
            this.hasMatch = true;
            var searchResult = new App.Views.SearchResult({
              model: this.url.attributes[key].alias
            })
            this.addSubview(".search-results", searchResult)
          };
        };
        if (!this.hasMatch) {
          this.$(".search-results").text("No matches");
        }
      }.bind(this)
    })
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
