require('aeonian').config({
  bucket: {
    localDir: './dist/',
    prefix: 'resume-',
  },
  website: {
    index: 'index.html',
    error: 'error/index.html',
  },
  environments: {
    production: 'E2QQVZ1Q8CJCLW',
  },
}).deploy(process.argv[2])
