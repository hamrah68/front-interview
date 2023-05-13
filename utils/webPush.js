import firebase from 'firebase/app'
import 'firebase/messaging'
import 'firebase/analytics'
import localforage from 'localforage'


const firebaseCloudMessaging = {
  tokenInlocalforage: async () => {
    return localforage.getItem('fcm_token')
  },

  init: async function (topic) {
    if (Notification.permission !== "granted" && Notification.permission !== "denied") {
      await Notification.requestPermission()
    }
    if (!firebase.apps.length) {
      const clientCredentials = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        measurementId: "G-234VQRFMQV",
        storageBucket: "offch-a62b1.appspot.com",
        authDomain: "offch-a62b1.firebaseapp.com",
      }
      firebase.initializeApp(clientCredentials)

      if (typeof window !== 'undefined') {
        // Enable analytics. https://firebase.google.com/docs/analytics/get-started
        if ('measurementId' in clientCredentials) {
          firebase.analytics()
        }
      }
    } else {
      const messaging = firebase.messaging()
      const token = await messaging.getToken()

      subscribeTokenToTopic(token, topic)

      firebase.app();
    }

    try {
      if ((await this.tokenInlocalforage()) !== null) {
        return false
      }

      await Notification.requestPermission()
      const messaging = firebase.messaging()
      const token = await messaging.getToken()

      subscribeTokenToTopic(token, topic)

      localforage.setItem('fcm_token', token)
      localStorage.setItem('fcm_token', 1);
      // console.log('fcm_token', token)
    } catch (error) {
      console.error(error)
      localStorage.setItem('fcm_token', 0);
    }
  },
}

function subscribeTokenToTopic(token, topic) {
  const body = { topic, token }
  fetch('https://api.offch.com/api/subscribe_token_to_topic', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(body)
  }).then(response => {
    if (response.status < 200 || response.status >= 400) {
      throw 'Error subscribing to topic: ' + response.status + ' - ' + response.text();
    }
    console.log(": ", topic);
  }).catch(error => {
    console.error(error);
  })
}

export { firebaseCloudMessaging }
