const react = require('react')

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  const { domainId, server } = pluginOptions
  setPostBodyComponents([
    react.createElement(
      'script',
      {
        async,
        src: `${domainId}/tracker.js`,
        'data-ackee-server': server,
        'data-ackee-domain-id': domainId,
      }
    )
  ])
}