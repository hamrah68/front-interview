/* global importScripts, firebase */
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js')

firebase.initializeApp({
  apiKey: "AIzaSyCHf1X-4WGEi0ij3bpu3-PIlRt_No5xteo",
  projectId: "offch-a62b1",
  messagingSenderId: "23089221893",
  appId: "1:23089221893:web:194e3900af30f2a41be76c",
})



firebase.messaging().setBackgroundMessageHandler((payload) => {
  setTimeout(() => {
    try {
      const { title, body, image, click_action, icon, action_one_title, action_one_link, action_two_title, action_two_link, primaryKey } = payload.data;

      const notifActions =
        action_one_title &&
          action_one_link &&
          action_two_title &&
          action_two_link ?
          [
            { action: 'action_one', title: action_one_title },
            { action: 'action_two', title: action_two_title }
          ] : action_one_title &&
            action_one_link ? [{ action: 'action_one', title: action_one_title },] : [{}]
      var options = {
        body,
        image,
        icon,
        data: { click_action, action_one_title, action_one_link, action_two_title, action_two_link, primaryKey },
        actions: notifActions
      };

      // self.registration.showNotification(title, options);
      self.addEventListener('push', async function (event) {
        event.waitUntil(
          self.registration.showNotification(title, options)
        );
      });
    } catch (err) {
      console.log(err);
    }
  }, 1000);
});


self.addEventListener('notificationclick', function (event) {
  try {
    var { data } = event.notification;

    const { action_one_link, action_two_link, click_action } = data

    event.notification.close();

    if (click_action !== null) {
      if (event.action === 'action_one') {
        clients.openWindow(action_one_link);
      }
      else if (event.action === 'action_two') {
        clients.openWindow(action_two_link);
      }
      else {
        clients.openWindow(click_action)
      }
    } else {
      clients.openWindow("https://www.offch.com/")
      event.notification.close();
    }
  } catch (err) {
    clients.openWindow("https://www.offch.com/")
    event.notification.close();
  }

}, false);

