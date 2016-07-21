import mongoose from 'mongoose';
import session from 'koa-generic-session';
import sessionStore from '../libs/sessionStore';
import convert from 'koa-convert';

console.log(sessionStore);

export default () => convert(session({store: sessionStore}))
