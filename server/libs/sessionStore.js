import mongooseStore from 'koa-session-mongoose';

export default mongooseStore.create({model: 'Session'});
