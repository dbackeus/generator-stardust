var yeoman = require('yeoman-generator')
var inflection = require('inflection')

module.exports = yeoman.generators.NamedBase.extend({
  model: function() {
    var tableized = inflection.tableize(this.name)
    var filename = inflection.singularize(tableized)

    data = {
      tableized: tableized,
      classified: inflection.classify(this.name)
    }

    this.template('model.coffee', 'collections/'+filename+'.coffee', data)
    this.template('model_publication.coffee', 'server/publications/'+tableized+'.coffee', data)

    this.log("Don't forget to add Meteor.subscribe('"+tableized+"') where it makes sense!")
  }
})
