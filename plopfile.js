const config = plop => {
  // module generator
  plop.setGenerator('module', {
    description: 'application module logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'module name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'api/app/{{camelCase name}}s/{{camelCase name}}s.controller.js',
        templateFile: 'plop/plop-templates/controller.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: 'api/app/{{camelCase name}}s/{{camelCase name}}.js',
        templateFile: 'plop/plop-templates/model.hbs',
        skipIfExists: true
      },

      // Add Redux
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{camelCase name}}.redux.js',
        templateFile: 'plop/plop-templates/redux.hbs',
        skipIfExists: true
      },
      // Append Reducer
      {
        type: 'append',
        path: 'src/redux/reducers/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `import { {{camelCase name}} } from './../../components/{{pascalCase name}}/{{camelCase name}}.redux'`
      },
      {
        type: 'append',
        path: 'src/redux/reducers/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}}s,`
      },
      // Add Saga
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{camelCase name}}.saga.js',
        templateFile: 'plop/plop-templates/saga.hbs',
        skipIfExists: true
      },
      // Export Saga
      {
        type: 'append',
        path: 'src/redux/sagas/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export { {{camelCase name}}Sagas } from './../../components/{{pascalCase name}}/{{camelCase name}}.saga'`
      }
    ]
  })
}

module.exports = config
