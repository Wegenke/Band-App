import * as express from 'express';
let router = express.Router();
// import events from '../api/events';
let events = [
  {id:1, name:"uno"},
  {id:2, name:'dos'}
]

router.get('/allevents', (req, res) => {
  res.send(events);
});

router.get('/count', (req, res) => {
  res.send(events.length.toString());
});

export default router; 
 