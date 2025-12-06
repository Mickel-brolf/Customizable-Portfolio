import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ITestimonial extends Document {
    clientId: mongoose.Types.ObjectId;
    name: string;
    content: string;
    role: string;
    avatar: string;
    createdAt: Date;
}

const TestimonialSchema: Schema = new Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    name: { type: String, required: true },
    content: { type: String, required: true },
    role: { type: String },
    avatar: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const Testimonial: Model<ITestimonial> = mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);

export default Testimonial;
