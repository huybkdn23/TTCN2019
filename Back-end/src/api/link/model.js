import mongoose, { Schema } from 'mongoose'

const linkSchema = new Schema({
  link: {
    type: String
  },
  name: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

linkSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      link: this.link,
      name: this.name,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Link', linkSchema)

export const schema = model.schema
export default model
