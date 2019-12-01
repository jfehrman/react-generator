const appRoot = require('app-root-path')
const {
  classComponentTemplate,
  componentStyleTemplate,
  componentTemplate,
  componentStoryTemplate,
  componentTestTemplate,
  storybookConfigTemplate,
  storybookWebpackConfigTemplate,
} = require('../../plop-templates/templates.js')

const addAction = (path, template, skipIfExists = false) => ({
  type: 'add',
  path,
  template,
  skipIfExists,
})

const modifyAction = (path, pattern, template) => ({
  type: 'modify',
  path,
  pattern,
  template,
})

const generateBaseFiles = (cwd, jsExt, ssExt, type, isSemicolons) => {
  const actions = [
    addAction(
      `${cwd}/{{snakeCase name}}/{{snakeCase name}}.${jsExt}`,
      (type === 'component')
        ? componentTemplate
        : classComponentTemplate,
    ),
    addAction(
      `${cwd}/{{snakeCase name}}/{{snakeCase name}}.${ssExt}`,
      componentStyleTemplate,
    ),
  ]
  if (!isSemicolons) {
    actions.push(
      modifyAction(
        `${cwd}/{{snakeCase name}}/{{snakeCase name}}.${jsExt}`,
        /;\n/g,
        '\n',
      ),
    )
  }
  return actions
}

const addTestFiles = (actions, cwd, isJest, isStorybook, jsExt, isSemicolons) => {
  if (isJest) {
    actions.push(
      addAction(
        `${cwd}/{{snakeCase name}}/__test__/{{snakeCase name}}.test.${jsExt}`,
        componentTestTemplate,
      ),
    )
    if (!isSemicolons) {
      actions.push(
        modifyAction(
          `${cwd}/{{snakeCase name}}/__test__/{{snakeCase name}}.test.${jsExt}`,
          /;\n/g,
          '\n',
        ),
      )
    }
  }
  if (isStorybook) {
    actions.push(
      addAction(
        `${cwd}/{{snakeCase name}}/__test__/{{snakeCase name}}.story.${jsExt}`,
        componentStoryTemplate,
      ),
    )
    actions.push(
      addAction(
        `${appRoot.path}/.storybook/config.js`,
        storybookConfigTemplate,
        true,
      ),
    )
    actions.push(
      addAction(
        `${appRoot.path}/.storybook/webpack.config.js`,
        storybookWebpackConfigTemplate,
        true,
      ),
    )
    if (!isSemicolons) {
      actions.push(
        modifyAction(
          `${cwd}/{{snakeCase name}}/__test__/{{snakeCase name}}.story.${jsExt}`,
          /;\n/g,
          '\n',
        ),
      )
    }
  }
}

const generateComponentActions = (
  type,
  cwd,
  jsExt,
  ssExt,
  isJest,
  isStorybook,
  isSemicolons,
) => {
  const actions = generateBaseFiles(cwd, jsExt, ssExt, type, isSemicolons)
  addTestFiles(actions, cwd, isJest, isStorybook, jsExt, isSemicolons)
  return actions
}

module.exports = {
  generateComponentActions,
  generateBaseFiles,
  addTestFiles,
  addAction,
  modifyAction,
}

