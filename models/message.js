var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//
var User = require('./user');

var messageSchema = new Schema({
  content: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" }
});

// Remove user.message after delete a message
messageSchema.post('remove', function (message) {
  User.findById(message.user, function (err, user) {
      user.messages.pull(message);
      user.save();
  });
});

module.exports = mongoose.model("Message", messageSchema);
