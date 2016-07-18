// import './strategies';

export default async function (next) {
  require('./strategies');
  console.log('asd')
  await next();
}
