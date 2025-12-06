import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IService extends Document {
    clientId: mongoose.Types.ObjectId;
    title: string;
    description: string;
    icon: string;
    createdAt: Date;
}

const ServiceSchema: Schema = new Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    title: { type: String, required: true },
    description: { type: String },
    icon: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const Service: Model<IService> = mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);

export default Service;
