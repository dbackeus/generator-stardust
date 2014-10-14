Template.<%= classified %>Index.helpers
  <%= pluralized %>: ->
    <%= classified %>.find()

Template.<%= classified %>Index.events
  "click [data-action=delete]": ->
    <%= classified %>.remove @_id
