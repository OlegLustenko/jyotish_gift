import mongoose from 'mongoose';
import session from 'koa-generic-session';
import sessionStore from '../libs/sessionStore';
import convert from 'koa-convert';

export default () => convert(session({ store: sessionStore }))
