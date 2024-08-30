export default {
  "appManifest": {
    "permissions": [
      "callsWidget:screen.write",
      "showsPlayer:screen.write"
    ],
    "src": {
      "type": "module",
      "url": "http://localhost:5173/main.js"
    },
    "screens": {
      "showsPlayer": [{
        "id": "my-custom-pre-enter-screen",
        "slot": "pre-enter"
      }, {
        "id": "my-custom-pre-ended-screen",
        "slot": "pre-ended"
      }],
      "callsWidget": [{
        "id": "my-custom-drop-in-screen",
        "slot": "drop-in"
      }, {
        "id": "my-custom-pre-media-permissions-screen",
        "slot": "pre-media-permissions"
      }, {
        "id": "my-custom-thank-you-screen",
        "slot": "thank-you"
      }, {
        "id": "my-custom-post-thank-you-screen",
        "slot": "post-thank-you"
      }]
    }
  },
  "appConfig": {}
};
