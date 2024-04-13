import mongoose from 'mongoose';

mongoose
	.connect('mongodb://localhost:27017/notes')
	.then(() => {
		console.log('DB connected');
	})
	.catch((err) => {
		console.log(err);
	});
