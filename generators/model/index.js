var yeoman = require('yeoman-generator')
var inflection = require('inflection')
require('../../lib/propertised_base')

module.exports = yeoman.generators.PropertisedBase.extend({
  model: function() {
    var tableized = this.templateData.tableized
    var filename = inflection.singularize(tableized)

    this.template('model.coffee', 'collections/'+filename+'.coffee', this.templateData)
    this.template('model_publication.coffee', 'server/publications/'+tableized+'.coffee', this.templateData)
  },

  done: function() {
    this.log("Don't forget to subscribe via Meteor.subscribe('"+this.templateData.tableized+"')")
  }
})
