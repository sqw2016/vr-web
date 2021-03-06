// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'VR建材城市联盟',
  port: 8081,
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://117.50.107.63:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['area', 'company', 'vr'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: ''
        }
      }
    }
  ]
}
