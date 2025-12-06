import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IClient extends Document {
    name: string;
    subdomain: string;
    logo: string;
    theme: {
        color: string;
        font: string;
    };
    createdAt: Date;
}

const ClientSchema: Schema = new Schema({
    name: { type: String, required: true },
    subdomain: { type: String, required: true, unique: true },
    logo: { type: String },
    theme: {
        color: { type: String, default: '#000000' },
        font: { type: String, default: 'Inter' }
    },
    createdAt: { type: Date, default: Date.now }
});

const Client: Model<IClient> = mongoose.models.Client || mongoose.model<IClient>('Client', ClientSchema);

export default Client;
