import mongoose, { Document, Schema } from 'mongoose';

import { ICar } from './Car';

export interface IMaintenance extends Document {
  car: ICar;
  firstName: string;
  lastName: string;
  estimateDate: Date;
}

const MaintenanceSchema: Schema = new Schema({
  car: { type: Schema.Types.ObjectId, ref: 'Car' },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  estimateDate: { type: Date, require: true }
});

export default mongoose.model<IMaintenance>('Maintenance', MaintenanceSchema);
