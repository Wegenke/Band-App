import * as mongoose from 'mongoose';

export interface IEvent extends mongoose.Document {
  genre: 'comedy' | 'Music' | 'theater';
  performer: string;
  date:string;
  ticket: number;
  time: number;
} 

let eventSchema = new mongoose.Schema({
  genre: {
    enum:['comedy', 'music', 'theater'],
    type: String,
    required: true
  },
  performer:{
    type: String,
    required: true
  },
  date:{
    type: String,
    required: true
  },
  ticket:{
    type: String,
    required: true
  },
  time:{
      type: String,
      required: true
  }

});

export default mongoose.model<IEvent>('Event', eventSchema);