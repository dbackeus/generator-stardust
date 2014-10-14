Template.<%= classified %>New.helpers()

Template.<%= classified %>New.events()

AutoForm.hooks
  "edit-<%= dasherized %>-form":
    onSuccess: (operation, result, template) ->
      Router.go "<%= classified %>Index"
