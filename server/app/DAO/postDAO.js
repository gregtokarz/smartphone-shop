import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const postSchema = new mongoose.Schema({
    title: {type: String},
    text: {type: String},
    price: {type: String},
    details: {type: String},
    image: {type: String}
}, {
    collection: 'gt_post'
});
postSchema.plugin(uniqueValidator);

const PostModel = mongoose.model('gt_post', postSchema);

async function query() {
    const result = await PostModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

async function get(id) {
    return PostModel.findOne({_id: id}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

async function createNewOrUpdate(data) {
    return Promise.resolve().then(() => {
        if (!data.id) {
            return new PostModel(data).save().then(result => {
                if (result[0]) {
                    return mongoConverter(result[0]);
                }
            });
        } else {
            return PostModel.findByIdAndUpdate(data.id, _.omit(data, 'id'), {new: true});
        }
    });
}

async function remove(id){
    return PostModel.findByIdAndRemove(id);
}

export default {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,

    remove: remove,
    model: PostModel
};
