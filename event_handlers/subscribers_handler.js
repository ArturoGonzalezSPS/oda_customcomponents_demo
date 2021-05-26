"use strict";

// node fetch API can be used to make REST calls, see https://www.npmjs.com/package/node-fetch
const fetch = require("node-fetch");

module.exports = {
  metadata: {
    name: "subscribers_handler",
    eventHandlerType: "ResolveEntities",
  },
  handlers: {
    entity: {
      resolved: async (event, context) => {
        let message = "Thank you for subscribing to our service.";
        /* Here you can call to a Microservice to subscribe the user or other amazing stuff */
        context.addMessage(message);
      },
    },

    items: {
      ASK_ENABLE_NOTIFICATIONS: {
        validate: async (event, context) => {
          let want_to_subscribe = event;
          if (want_to_subscribe.newValue === "NO") {
            let message =
              "We hope that in the future you will consider subscribing.";
            context.addMessage(message);
          }
          return true;
        },
      },

      ASK_PHONE_NUMBER: {
        shouldPrompt: async (event, context) => {
          /* Here you can call set up some logic bussiness rules */
          let want_to_subscribe = context._entity;
          if (want_to_subscribe.ASK_ENABLE_NOTIFICATIONS === "YES") {
            console.log("Should Prompt");
            return true;
          } else {
            console.log("NOT Should Prompt");
            return false;
          }
        },
      },
    },
  },
};
