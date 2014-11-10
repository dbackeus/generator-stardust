var yeoman = require('yeoman-generator')
var inflection = require('inflection')
require('../../lib/propertised_base')

module.exports = yeoman.generators.PropertisedBase.extend({
  controller: function() {
    var fileName = inflection.underscore(this.name)

    this.template('helper.coffee', 'helpers/'+fileName+'.coffee', {name: this.name})
  }
})
