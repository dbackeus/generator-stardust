root = global ? window

<%= classified %> = new Meteor.Collection "<%= tableized %>"

<%= classified %>.attachSchema new SimpleSchema {<% properties.forEach(function (property){ %>
  <%= property.name %>:
    type: <%= property.type %><% }) %>
}

<%= classified %>.allow
    insert: (userId, doc) ->
      true

    update: (userId, doc, fields, modifier) ->
      true

    remove: (userId, doc) ->
      true

root.<%= classified %> = <%= classified %>
