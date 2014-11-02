var yeoman = require('yeoman-generator')
var inflection = require('inflection')
require('../../lib/propertised_base')

module.exports = yeoman.generators.PropertisedBase.extend({
  model: function() {
    var tableized = this.templateData.tableized
    var filename = inflection.singularize(tableized)

    this.template('model.coffee', 'lib/collections/'+filename+'.coffee', this.templateData)
    this.template('model_publication.coffee', 'server/publications/'+tableized+'.coffee', this.templateData)

    this.on('end', function() {
      this.log("")
      this.log("Subscribe to your model via:")
      this.log("  Meteor.subscribe('"+this.templateData.tableized+"')")
    })
  }
})
