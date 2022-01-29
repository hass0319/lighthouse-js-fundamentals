let facebookProfile={
  name: "Amro",
  friends: 5,
  messages: ["hi, how are you","feen al akl","ro7t feen"],
  postMessage: function(message){//adds a new message string to the array
    facebookProfile.messages.push(message);
  }, 
  deleteMessage: function(index){//removes the message corresponding to the index provided
    facebookProfile.messages.splice(index,1);
  },
  addFriend: function(){//increases the friend count by 1
    facebookProfile.friends+=1;
  }, 
  removeFriend: function(){//decreases the friend count by 1
    facebookProfile.friends>0? facebookProfile.friends -= 1 : false //console.log("no more friends");
  }
};