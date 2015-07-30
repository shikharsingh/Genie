module.exports = {
  "inputs": {
    "Title": {
      "example": "A day in the life of a scorpion",
      "friendlyName": "Title",
      "required": true
    },
    "Source": {
      "example": "Website",
      "friendlyName": "Source",
      "required": true
    },
    "Body": {
      "example": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "friendlyName": "Body",
      "required": true
    },
    "ImageURL": {
      "example": "http://www.google.com",
      "friendlyName": "ImageURL",
      "required": true
    },
    "PostingUserId": {
      "example": 14,
      "friendlyName": "PostingUserId",
      "required": true
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": {
        "Title": "A day in the life of a scorpion",
        "Source": "Website",
        "Body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ImageURL": "http://www.google.com",
        "PostingUserId": 14,
        "id": 123,
        "createdAt": "2015-06-14T15:29:25.974Z",
        "updatedAt": "2015-06-14T15:29:25.974Z"
      }
    },
    "error": {
      "example": undefined
    }
  },
  "defaultExit": undefined,
  "fn": function(inputs, exits, env) {
    env.sails.models.post.create(env.sails.util.objCompact(inputs)).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "create_post"
};