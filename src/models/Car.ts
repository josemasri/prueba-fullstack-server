import mongoose, { Document, Schema } from 'mongoose';

export interface ICar extends Document {
  id: number;
  description: string;
  make: string;
  carModel?: string;
  km: number;
  image: string;
  estimatedate: Date;
}

const CarSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  description: { type: String, require: true },
  make: { type: String, required: true },
  carModel: { type: String, required: true },
  km: { type: Number, require: true },
  image: { type: String, required: true },
  estimatedate: { type: Date },
});

export default mongoose.model<ICar>('Car', CarSchema);
