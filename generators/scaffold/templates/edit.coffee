Template.<%= classified %>Edit.helpers()

Template.<%= classified %>Edit.events()

AutoForm.hooks
  "edit-<%= dasherized %>-form":
    onSuccess: (operation, result, template) ->
      Router.go "<%= classified %>Index"
