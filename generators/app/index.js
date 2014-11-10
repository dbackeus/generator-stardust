var yeoman = require('yeoman-generator')

module.exports = yeoman.generators.Base.extend({
  app: function() {
    this.mkdir('client')
    this.mkdir('client/lib')
    this.mkdir('client/compatibility')
    this.mkdir('client/stylesheets')
    this.mkdir('client/views')
    this.mkdir('client/helpers')
    this.mkdir('lib')
    this.mkdir('lib/collections')
    this.mkdir('controllers')
    this.mkdir('server')
    this.mkdir('server/lib')
    this.mkdir('server/publications')
    this.mkdir('public')
    this.mkdir('public/fonts')
    this.mkdir('public/images')
    this.mkdir('private')
    this.mkdir('.meteor')

    this.copy('lib/router.coffee', 'lib/router.coffee')
    this.copy('client/views/router/layout.html', 'client/views/router/layout.html')
    this.copy('client/views/router/loading.html', 'client/views/router/loading.html')
    this.copy('client/views/index.html', 'client/views/index.html')
    this.copy('client/views/index.coffee', 'client/views/index.coffee')
    this.copy('controllers/application_controller.coffee', 'controllers/application_controller.coffee')
    this.copy('client/stylesheets/app.scss', 'client/stylesheets/app.scss')

    this.spawnCommand('meteor', ['remove', "autopublish", "insecure"])

    var packages = [
      "iron:router",
      "mizzao:bootstrap-3",
      "coffeescript",
      "aldeed:collection2",
      "aldeed:autoform",
      "mquandalle:bower",
      "meteorhacks:zones",
      "fourseven:scss",
    ]

    // https://github.com/matb33/meteor-collection-hooks

    this.spawnCommand('meteor', ['add'].concat(packages))
  }
})
