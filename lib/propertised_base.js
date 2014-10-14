var yeoman = require('yeoman-generator')
var inflection = require('inflection')

yeoman.generators.PropertisedBase = yeoman.generators.NamedBase.extend({
  constructor: function() {
    yeoman.generators.NamedBase.apply(this, arguments)

    indexOfGeneratorArgument = process.argv.reduce(function(previous, current, index) {
      if(previous == 0 || previous) return previous

      if(current.indexOf("stardust") == 0) return index
    }, null)

    this.propertyArguments = process.argv.slice(indexOfGeneratorArgument+2, process.argv.length)

    var properties = this.propertyArguments.map(function(argument) {
      var nameAndType = argument.split(":")
      var type = inflection.classify(nameAndType[1])
      return { name: nameAndType[0], type: type }
    })

    this.properties = properties

    this.templateData = {
      tableized: inflection.tableize(this.name),
      pluralized: inflection.pluralize(this.name),
      classified: inflection.classify(this.name),
      titleized: inflection.transform(this.name, ["pluralize", "titleize"]),
      properties: this.properties
    }
  }
})
