import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProject extends Document {
    clientId: mongoose.Types.ObjectId;
    title: string;
    description: string;
    images: string[];
    category: string;
    createdAt: Date;
}

const ProjectSchema: Schema = new Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    title: { type: String, required: true },
    description: { type: String },
    images: [{ type: String }],
    category: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const Project: Model<IProject> = mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);

export default Project;
