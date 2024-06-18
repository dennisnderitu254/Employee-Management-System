// const mongoose = require('mongoose');

// const TaskSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   done: {
//     type: Boolean,
//     default: false,
//   },
// });

// module.exports = mongoose.model('Task', TaskSchema);

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  done: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', taskSchema);
