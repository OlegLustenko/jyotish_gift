// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)


import router from 'react-router';
import App from '../components/App';

console.log(require('../components/Navigation'));
console.log(require('../components/App'));
console.log(require('../routes/login'));



let testLogin = {
  path:'login',
  getComponent(nextState, callback) {
    require.ensure([], function (require) {
      callback(null, require('../routes/login'))
    })
  }

}


const routes = {
  path:'/',
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [ testLogin ])
    })
  },
  // getIndexRoute(partialNextState, callback) {
  //   require.ensure([], function (require) {
  //     callback(null, {
  //       component: require('./login'),
  //     })
  //   })
  // },
  component:App
  // getComponent(nextState, callback) {
  //   require.ensure([], function (require) {
  //     callback(null, require('../components/App'))
  //   })
  // }

}


export { routes }
