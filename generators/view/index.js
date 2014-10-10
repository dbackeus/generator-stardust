var yeoman = require('yeoman-generator')

module.exports = yeoman.generators.NamedBase.extend({
  view: function() {
    var filename = this.name.toLowerCase()

    this.template('view.html', 'client/views/'+filename+'.html')
    this.template('view.coffee', 'client/views/'+filename+'.coffee')
  }
})
