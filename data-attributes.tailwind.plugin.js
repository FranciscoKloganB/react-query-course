/**
 * Generates a tailwind selector for arbitrary data-attributes
 *
 * See examples of data-state of RadixUI
 *
 * ```html
 * <button data-state='highlighted', data-state='on', data-state='checked' />
 * ```
 *
 * @param state {string} the stateful html data attribute, e.g.: RadixUI States (checked, highlighted, ...)
 * @param addVariant {string} allows registration of custom variants
 * @param escape {(s: string) => string} a function that manually escapes strings meant to be used as classNames
 */
function dataStateVariant(state, { addVariant, escape }) {
  addVariant(`data-state-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${escape(
        `data-state-${state}${separator}${className}`
      )}[data-state='${state}']`
    })
  })

  addVariant(`group-data-state-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.group[data-state='${state}'] .${escape(
        `group-data-state-${state}${separator}${className}`
      )}`
    })
  })

  addVariant(`peer-data-state-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.peer[data-state='${state}'] ~ .${escape(
        `peer-data-state-${state}${separator}${className}`
      )}`
    })
  })
}

function plugin(helpers) {
  dataStateVariant("checked", helpers)
  dataStateVariant("closed", helpers)
  dataStateVariant("disabled", helpers)
  dataStateVariant("enabled", helpers)
  dataStateVariant("highlighted", helpers)
  dataStateVariant("on", helpers)
  dataStateVariant("open", helpers)
  dataStateVariant("placeholder", helpers)
  dataStateVariant("unchecked", helpers)
}

module.exports = plugin
