// polyfill webpack require.ensure
if ( typeof require.ensure !== 'function' ) require.ensure = (d, c) => c(require);

import router from 'react-router';
import App from '../components/App';

const testLogin = {
  path: 'login',
  getComponent(nextState, callback) {
    require.ensure([], function(require) {
      callback(null, require('../routes/login'))
    })
  }
};


// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//       </ul>

//       <hr/>

//       <Match exactly pattern="/" component={Home} />
//       <Match pattern="/about" component={About} />
//       <Match pattern="/topics" component={Topics} />
//     </div>
//   </Router>
// )


const routes = {
  path: '/',
  // getChildRoutes(location, cb) {
  //   require.ensure([], (require) => {
  //     cb(null, [testLogin]);
  //   });
  // },
  getIndexRoute(partialNextState, callback) {
    require.ensure([], function(require) {
      callback(null, {
        component: require('./login')
      });
    });
  },
  component: App
  // getComponent(nextState, callback) {
  //   require.ensure([], function (require) {
  //     callback(null, require('../components/App'))
  //   })
  // }
  
};


export default routes