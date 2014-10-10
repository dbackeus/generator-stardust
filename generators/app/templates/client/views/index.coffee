Template.index.helpers
  myAppVariable: ->
    Session.get "myAppVariable"

Template.index.events
  "click button": (event, template) ->
    Session.set "myAppVariable", Math.floor(Math.random() * 11)
