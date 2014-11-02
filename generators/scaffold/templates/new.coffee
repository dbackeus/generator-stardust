Template.<%= classified %>New.helpers()

Template.<%= classified %>New.events()

AutoForm.hooks
  "new-<%= dasherized %>-form":
    onSuccess: (operation, result, template) ->
      Router.go "<%= tableized %>"
