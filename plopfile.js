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
      // Add Redux
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{camelCase name}}.redux.js',
        templateFile: 'plop/plop-templates/redux.hbs',
        skipIfExists: true
      },
      // Append Reducer
      {
        // Action type 'append' injects a template into an existing file
        type: 'append',
        path: 'src/redux/reducers/index.js',
        // Pattern tells plop where in the file to inject the template
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { {{camelCase name}} } from './../../components/{{pascalCase name}}/{{camelCase name}}.redux'`
      },
      {
        type: 'append',
        path: 'src/redux/reducers/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}},`
      }
    ]
  })
}

module.exports = config
