const {Schema, model} = require('mongoose')

const UsersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  }, 
  password: {
    type: String,
    required: true
  }, 
  siparisler:[],
  kartbilgileri:[],
  sepet:[],
  favoriler:[],
  adres:[],
  telefon:'',
  },
{
  timestamps: { date: 'created_at'}
})

module.exports = model('users', UsersSchema)