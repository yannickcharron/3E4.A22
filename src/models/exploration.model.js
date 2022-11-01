import mongoose from 'mongoose';

const explorationSchema = mongoose.Schema({

    explorationDate: { type: Date, default: Date.now, required:true },
    coord: {
        lon: Number,
        lat: Number
    },
    scans: [{
        element: String,
        percent: Number,
    }],
    commment: String
}, {
    collection: 'explorations'
});

export default mongoose.model('Exploration', explorationSchema);