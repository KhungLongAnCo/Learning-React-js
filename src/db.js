import mongoose from 'mongoose';

mongoose.connect(
	'mongodb+srv://luankoy:luankoy@expressmanager-zwsha.mongodb.net/test?retryWrites=true'
	,{ useNewUrlParser: true}
	);

const userSchema = new mongoose.Schema({
    name:String,
    status: Boolean
})

const user = mongoose.model('user', userSchema);

export default user;
