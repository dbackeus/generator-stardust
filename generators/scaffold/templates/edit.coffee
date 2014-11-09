Template.<%= classified %>Edit.helpers()

Template.<%= classified %>Edit.events()

Template.<%= classified %>Edit.rendered = ->

AutoForm.hooks
  "edit-<%= dasherized %>-form":
    onSuccess: (operation, result, template) ->
      Router.go "<%= tableized %>"
