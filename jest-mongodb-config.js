module.exports = {
   mongodbMemoryServer: {
      version: '4.1.1'
   },
   mongodbMemoryServerOptions: {
      instance: {
         dbName: 'jest'
      },
      binary: {
         version: '4.0.3',
         skipMD5: true
      },
      autoStart: false
   }
}