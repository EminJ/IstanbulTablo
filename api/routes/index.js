const express = require('express')
const router = express.Router()
const Users = require('../models/Users');

router.post('/login/new', (req, res) => {
  const {name, email, password} = req.body
  if(name=='' || email=='' || password=='') return res.status(404).send('Eksik Giriş Sağlandı..');
  if(password.length<8) return res.status(404).send('Şifre En Az 8 harfli Olmalıdır.');
  new Users({
    name,
    email,
    password
  }).save()
  .then(data => {
    res.status(200).send(data)
  }).catch(err => {
    res.status(404).send('Bir Hata Olmalı!')
  })
})

router.post('/login', (req, res) => {
  const {email, password} = req.body
  if(email=='' || password=='') return res.status(404).send('Eksik Giriş Sağlandı..');
  Users.find({email: email,password: password}).then(data => {
    if(data[0].password == password) return res.status(200).send('giriş yapıldı');
  }).catch(err => {
    res.status(404).send('E-Posta veya Şifre hatalı..')
  })
})

module.exports = router
