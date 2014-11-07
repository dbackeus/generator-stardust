var yeoman = require('yeoman-generator')
var inflection = require('inflection')
require('../../lib/propertised_base')

module.exports = yeoman.generators.PropertisedBase.extend({
  controller: function() {

    if(this.name == this.templateData.pluralized) {
      var name = this.templateData.classifiedPlural
      var fileName = this.templateData.tableized
    }
    else {
      var name = this.templateData.classified
      var fileName = this.templateData.tableizedSingular
    }

    this.template('controller.coffee', 'controllers/'+fileName+'_controller.coffee', {name: name})
  }
})
