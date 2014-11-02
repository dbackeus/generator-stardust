root = global ? window

<%= classifiedPlural %>Controller = ApplicationController.extend
  waitOn: -> [
    Meteor.subscribe("<%= tableized %>"),
  ]

  index: ->
    @render "<%= classified %>Index"

  show: ->
    @render "<%= classified %>Show", data: <%= classified %>.findOne(@params._id)

  new: ->
    @render "<%= classified %>New"

  edit: ->
    @render "<%= classified %>Edit", data: <%= classified %>.findOne(@params._id)

root.<%= classifiedPlural %>Controller = PostsController
