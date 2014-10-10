Router.configure
  layoutTemplate: "layout"
  loadingTemplate: "loading"
  waitOn: -> [
    # Meteor.subscribe("collection")
  ]

Router.map ->
  @route "index", path: "/"
