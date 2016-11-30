// const path = require('path');

module.exports = (Franz, options) => {
  let updates = 0;

  const getMessages = () => {
    // get unread messages
    //const updates = document.getElementById('franz').getAttribute('data-unread');

    // get conversations in 'My Inbox'
    //const inbox = document.getElementById('franz').getAttribute('data-inbox');

    // set Franz badge
    // updates => passive unread count
    // inbox => active unread count
    Franz.setBadge(0, updates);
  };


  // inject franz.css stylesheet
  // Franz.injectCSS(path.join(__dirname, 'css', 'modal.css'));

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
