var memeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dank: { type: Boolean },
    repost: {
        type: Boolean,
        validate: function(v) {
            return v === true && this.dank === true;
        }
    }
})