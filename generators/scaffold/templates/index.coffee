Template.<%= classified %>Index.helpers()

Template.<%= classified %>Index.events
  "click [data-action=delete]": ->
    <%= classified %>.remove @_id

Template.<%= classified %>Index.rendered = ->
