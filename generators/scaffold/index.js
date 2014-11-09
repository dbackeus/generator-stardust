var yeoman = require('yeoman-generator')
require('../../lib/propertised_base')

module.exports = yeoman.generators.PropertisedBase.extend({
  scaffold: function() {
    var dirname = "client/views/"+this.templateData.tableized

    this.composeWith('stardust:model', {arguments: [this.name].concat(this.propertyArguments)})

    this.mkdir(dirname)

    this.template('show.html', dirname+'/show.html', this.templateData)
    this.template('show.coffee', dirname+'/show.coffee', this.templateData)
    this.template('index.html', dirname+'/index.html', this.templateData)
    this.template('index.coffee', dirname+'/index.coffee', this.templateData)
    this.template('_fields.html', dirname+'/_fields.html', this.templateData)
    this.template('_fields.coffee', dirname+'/_fields.coffee', this.templateData)
    this.template('new.html', dirname+'/new.html', this.templateData)
    this.template('new.coffee', dirname+'/new.coffee', this.templateData)
    this.template('edit.html', dirname+'/edit.html', this.templateData)
    this.template('edit.coffee', dirname+'/edit.coffee', this.templateData)
    this.template('resource_controller.coffee', 'controllers/'+this.templateData.tableized+'_controller.coffee', this.templateData)

    this.on('end', function() {
      var routes = ''
      routes += '  @route "'+this.templateData.tableized+'", controller: "'+this.templateData.classifiedPlural+'Controller", action: "index", name: "'+this.templateData.tableized+'"\n'
      routes += '  @route "'+this.templateData.tableized+'/new", controller: "'+this.templateData.classifiedPlural+'Controller", action: "new", name: "new_'+this.templateData.singularized+'"\n'
      routes += '  @route "'+this.templateData.tableized+'/:_id", controller: "'+this.templateData.classifiedPlural+'Controller", action: "show", name: "'+this.templateData.singularized+'"\n'
      routes += '  @route "'+this.templateData.tableized+'/:_id/edit", controller: "'+this.templateData.classifiedPlural+'Controller", action: "edit", name: "edit_'+this.templateData.singularized+'"\n'

      this.log("Copy paste these routes into lib/routes.coffee:")
      this.log(routes)
    })
  }
})
