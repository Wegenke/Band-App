import * as express from 'express';
import Event from '../models/event';

let router = express.Router();

// GET all Events
router.get('/', (req, res) => {
  Event.find().then((events)=> {
      res.json(events);
  }).catch((err) => {
      res.status(500);
      console.error(err);
  })
});

// Get a single event by id
router.get('/:id', (req, res) => {
  Event.findById(req.params['id']).then((event) => {
    res.json(event);
  });
});

// Create new event
router.post('/', (req, res) => {
  let event = new Event();
  event.genre = req.body.genre;
  event.performer = req.body.performer;
  event.date = req.body.date;
  event.time = req.body.time;
  event.ticket = req.body.ticket;

  // save new event
  event.save().then((newEvent) => {
    res.json(newEvent);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

// Update existing event
router.post('/:id', (req, res) => {
  let eventId = req.params.id;

  Event.findById(eventId).then((event) => {
    event.genre = req.body.genre;
    event.performer = req.body.performer;
    event.date = req.body.date;
    event.time = req.body.time;
    event.ticket = req.body.ticket;

    // save updated event
    event.save().then((updatedEvent) => {
      res.json(updatedEvent);
    }).catch((err) => {
      res.status(400).json(err);
    });

  }).catch(() => {
    res.sendStatus(404);
  });

});


// Delete event
router.delete('/:id', (req, res) => {
  let eventId = req.params.id;
  Event.remove({_id:eventId}).then(() => {
    res.sendStatus(200);
  }).catch((err) => {
    res.status(500);
    console.log(err);
  });
});

export default router;