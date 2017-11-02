/**
 * Created by Suhan on 07/06/2017.
 */
/**
 * Created by Suhan on 25/03/2017.
 */
var mongoose = require('mongoose');
// my schema goes here!
const Boom = new mongoose.Schema({
    foo: String,
});
const Bonus = new mongoose.Schema({
    user: String,
    data: String
});

//URLSlugs('<user>');
mongoose.model('Boom', Boom);
mongoose.model('Bonus', Bonus);
// mongoose.model('Link', Link);
mongoose.Promise = global.Promise;


mongoose.connect('');
