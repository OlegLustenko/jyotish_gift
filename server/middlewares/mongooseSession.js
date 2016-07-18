import mongoose from 'mongoose';
import session from 'koa-generic-session';
import sessionStore from '../libs/sessionStore';

export default session({store: sessionStore})
