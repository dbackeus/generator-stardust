generator-stardust
==================

Yeoman generators for Meteor using CoffeScript

## Installation

    npm install -g generator-stardust

## Usage

### Initialisation

Generates app skeleton, install base packages and generates a root route with template.
Run within a newly created Meteor app.

    yo stardust

You might want to remove the meteor-generated html/js/css files manually.

### Scaffold

Generate complete CRUD setup for a new model.

    yo stardust:scaffold <model-name> <attribute1>:<type> <attribute2>:<type>

### Helper

Generates a globally available helper for your SpaceBar templates.

    yo stardust:helper <yourHelperName>

### Controller

Generates a controller extending ApplicationController.

    yo stardust:controller <controller_name>

### View

Generates a template html and coffee file.

    yo stardust:view <path/template_name>

## Development

If you want to make changes to the generators you can clone the repository and use 
`npm link` to try out your changes on your local system.

You can also use `guard` to automatically link on file changes.

    bundle install
    bundle exec guard
