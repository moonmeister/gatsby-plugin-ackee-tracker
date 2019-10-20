# gatsby-plugin-ackee-tracker

## Description
Easily add Ackee Tracking Script to your Gatsby site.

A Gatsby plugin that interacts with the REST API of [Ackee](https://github.com/electerious/Ackee). Should be used to feed your server with data from your visitors.
### Dependencies
gatsby-plugin-ackee-tracker requires a running [Ackee server](https://github.com/electerious/Ackee).
## How to install

NPM
`npm install --save gatsby-plugin-ackee-tracker`

Yarn
`yarn add gatsby-plugin-ackee-tracker`

## Examples of usage

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: "gatsby-plugin-ackee-tracker",
    options: {
      // Domatin ID found when adding a domain in the admin panel.
      domain_id: "YOUR_ACKEE_DOMAIN_ID",
      // URL to Server eg: "https://analytics.test.com".
      server: "https://analytics.test.com",
      // Disabled analytic tracking when running localy
      ignore_localhost: true,
      // If enabled it will collect info on OS, BrowserInfo, Device  & ScreenSize
      detailed: false
    },
  },
]
```

## License

MIT
