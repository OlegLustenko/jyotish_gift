import mongoose from 'mongoose';
const {consts} = require('config').default;
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

// console.log(config);

let UserSchema = new mongoose.Schema({
  firstName: { type: String, required: 'User name required' },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    required: 'Email пользователя не должен быть пустым',
    validate: [{
      validator: function checkEmail(value) {
        return /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(value);
      },
      msg: 'Укажите, пожалуйста, корректный email.'
    }]
  },
  birthday: { type: Date },
  city: { type: ObjectId, ref: 'towns', default: null },
  country: { type: ObjectId, ref: 'countries', default: null },
  aboutMe: { type: String },
  created: { type: Date, default: Date.now },
  gender: {
    type: String,
    enum: { values: ['male', 'female'], message: "Неизвестное значение для пола." }
  },
  role: { type: String, required: true, default: consts.USER_ROLES.USER, enum: consts.ALLOWED_USER_ROLES },
  lastlogin: { type: Number, default: 0 },
  isActivated: { type: Boolean, default: false },
  phone: { type: String },
  order: { type: ObjectId, ref: 'order' },
  chart: { type: ObjectId, ref: 'chart' }
});

export default mongoose.model('User', UserSchema);
