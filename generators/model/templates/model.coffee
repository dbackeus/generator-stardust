root = global ? window

<%= classified %> = new Meteor.Collection "<%= tableized %>"

<%= classified %>.attachSchema new SimpleSchema {<% properties.forEach(function (property){ %>
  <%= property.name %>:
    type: <%= property.type %><% }) %>
}

root.<%= classified %> = <%= classified %>
