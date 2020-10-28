const swaggerDocument = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'APIs Bet Document',
    description:
      'This is a sample server Bet server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).',
    termsOfService: '',
    contact: {
      name: 'Gobelin Malin',
      email: 'mariemeline.paus@gmail.com'
    }
  },
  // https://api-bet-09-20.herokuapp.com/
  host: 'localhost:3000',
  basePath: '/api',
  schemes: 'http',
  paths: {
    '/bets': {
      get: {
        description: 'Returns all bets',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id',
            description: 'Bet id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'title',
            description: 'Bet title',
            required: false,
            type: 'string'
          },
          {
            in: 'params',
            name: 'description',
            description: 'Bet description',
            required: false,
            type: 'string'
          },
          {
            in: 'params',
            name: 'date_begin',
            description: 'Bet date Begin',
            required: false,
            type: 'datetime'
          },
          {
            in: 'params',
            name: 'date_end',
            description: 'Bet date end',
            required: false,
            type: 'datetime'
          },
          {
            in: 'params',
            name: 'id_user',
            description: 'Bet id of user',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'id_chalenger',
            description: 'Bet id of challenger',
            required: false,
            type: 'int'
          }
        ],
        responses: {
          '200': {
            description: 'A list of bet.',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/betItem'
              }
            }
          }
        }
      },
      post: {
        description: 'Create one bet with parameter : name, image',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'betItem',
            description: 'Bet item to add',
            schema: {
              $ref: '#/definitions/betItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Create one bet.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      put: {
        description:
          'Modify one bet with parameter : name, title, description, id_user, id_challenger, date_begin, date_end',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'betItem',
            description: 'Bet item to modify',
            schema: {
              $ref: '#/definitions/betItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Modify one bet.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      delete: {
        description: 'Delete one bet with parameter : id',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'betItem',
            description: 'Bet item to delete',
            schema: {
              $ref: '#/definitions/betItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Delete one bet.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      }
    },
    '/bets/:id/players': {
      get: {
        description: 'Returns of all players for one bet with is id (ex: 1',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id_user',
            description: 'User id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'id_challenger',
            description: 'User id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'id_player',
            description: 'User id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'id',
            description: 'Bet id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'price',
            description: 'Bet price id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'side',
            description: 'Bet side id',
            required: false,
            type: 'bool'
          }
        ],
        responses: {
          '200': {
            description: 'Players of one bet.'
          }
        }
      }
    },
    '/bidders': {
      get: {
        description: 'Returns all bidders',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id',
            description: 'Bidder id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'id_user',
            description: 'User id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'id_bet',
            description: 'Bet id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'price',
            description: 'Bet price',
            required: false,
            type: 'string'
          },
          {
            in: 'params',
            name: 'side',
            description: 'Bet side',
            required: false,
            type: 'bool'
          }
        ],
        responses: {
          '200': {
            description: 'A list of bidders.',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/bidderItem'
              }
            }
          }
        }
      },
      post: {
        description: 'Create one bidder with parameter : id_user, id_bet, price, side',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'bidderItem',
            description: 'Bidder item to add',
            schema: {
              $ref: '#/definitions/bidderItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Create one bidder.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      put: {
        description: 'Modify one bidder with parameter : id_user, id_bet, side, price',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'bidderItem',
            description: 'Bidder item to modify',
            schema: {
              $ref: '#/definitions/bidderItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Modify one bidder.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      delete: {
        description: 'Delete one bidder with parameter : id',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'bidderItem',
            description: 'Bidder item to delete',
            schema: {
              $ref: '#/definitions/bidderItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Delete one bidder.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      }
    },
    '/users': {
      get: {
        description: 'Returns all users',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id',
            description: 'User id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'firstname',
            description: 'First name',
            required: false,
            type: 'string'
          },
          {
            in: 'params',
            name: 'lastname',
            description: 'Last name',
            required: false,
            type: 'string'
          },
          {
            in: 'params',
            name: 'Nickname',
            description: 'Nickname',
            required: false,
            type: 'string'
          },
        ],
        responses: {
          '200': {
            description: 'A list of users.',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/userItem'
              }
            }
          }
        }
      },
      post: {
        description: 'Create one user with parameter : firstname, lastname, nickname',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'userItem',
            description: 'User item to add',
            schema: {
              $ref: '#/definitions/userItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Create one user.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      put: {
        description: 'Modify one user with parameter : firstname, lastname, nickname',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'userItem',
            description: 'User item to modify',
            schema: {
              $ref: '#/definitions/userItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Modify one user.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      delete: {
        description: 'Delete one user with parameter : id',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'userItem',
            description: 'User item to delete',
            schema: {
              $ref: '#/definitions/userItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Delete one user.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      }
    },
    '/users/:idUser/challenges': {
      get: {
        description: 'Returns of all bet for one challenger with is id (ex: 1',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id_user',
            description: 'User id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'id',
            description: 'Bet id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'id_challenger',
            description: 'Challenger id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'date_end',
            description: 'Date end the bet',
            required: false,
            type: 'datetime'
          },
          {
            in: 'params',
            name: 'date_begin',
            description: 'Date begin the bet',
            required: false,
            type: 'datetime'
          },
          {
            in: 'params',
            name: 'lastname',
            description: 'Lastname User',
            required: false,
            type: 'string'
          },
          {
            in: 'params',
            name: 'firstname',
            description: 'Firstname User',
            required: false,
            type: 'string'
          },
          {
            in: 'params',
            name: 'nickname',
            description: 'Nickname User',
            required: false,
            type: 'string'
          }
        ],
        responses: {
          '200': {
            description: 'Bets of one challenger.'
          }
        }
      }
    },
    '/users/:idUser/bets': {
      get: {
        description: 'Returns of all bet for one bidder with is id (ex: 1',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id_user',
            description: 'User id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'id',
            description: 'Bet id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'id_challenger',
            description: 'Challenger id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'date_end',
            description: 'Date end the bet',
            required: false,
            type: 'datetime'
          },
          {
            in: 'params',
            name: 'date_begin',
            description: 'Date begin the bet',
            required: false,
            type: 'datetime'
          },
          {
            in: 'params',
            name: 'lastname',
            description: 'Lastname User',
            required: false,
            type: 'string'
          },
          {
            in: 'params',
            name: 'firstname',
            description: 'Firstname User',
            required: false,
            type: 'string'
          },
          {
            in: 'params',
            name: 'nickname',
            description: 'Nickname User',
            required: false,
            type: 'string'
          }
        ],
        responses: {
          '200': {
            description: 'Bets of one bidder.'
          }
        }
      }
    },
    '/users/:id/friends': {
      get: {
        description: 'Returns of all friends for one user with is id (ex: 1',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id_user',
            description: 'User id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'id_player',
            description: 'User id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'id',
            description: 'Bet id',
            required: false,
            type: 'int'
          }
        ],
        responses: {
          '200': {
            description: 'Friens of one user.'
          }
        }
      }
    },
    '/friends': {    
      get: {
        description: 'Returns all friends',
        produces: ['application/json'],
        parameters: [
          {
            in: 'params',
            name: 'id',
            description: 'Friend id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'id_User',
            description: 'User id',
            required: false,
            type: 'int'
          },
          {
            in: 'params',
            name: 'id_friend',
            description: 'Friend id',
            required: false,
            type: 'int'
          },
        ],
        responses: {
          '200': {
            description: 'A list of friends.',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/friendItem'
              }
            }
          }
        }
      },
      post: {
        description: 'Create one friend with parameter : id_user, id_friend',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'friendItem',
            description: 'friend item to add',
            schema: {
              $ref: '#/definitions/friendItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Create one friend.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      put: {
        description: 'Modify one friend with parameter : id_user, id_friend',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'friendItem',
            description: 'Friend item to modify',
            schema: {
              $ref: '#/definitions/friendItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Modify one friend.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      },
      delete: {
        description: 'Delete one friend with parameter : id',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'friendItem',
            description: 'friend item to delete',
            schema: {
              $ref: '#/definitions/friendItem'
            }
          }
        ],
        responses: {
          '200': {
            description: 'Delete one friend.'
          },
          '500': {
            description: 'Error Server'
          }
        }
      }
    }
  },
  definitions: {
    betItem: {
      type: 'object',
      properties: {
        id: {
          type: 'int',
          format: 'id',
          example: '1'
        },
        title: {
          type: 'string',
          example: 'Pari 1'
        },
        description: {
          type: 'string',
          example: '1 semaine sans macdo'
        },
        id_user: {
          type: 'string',
          format: 'id',
          example: '1'
        },
        id_challenger: {
          type: 'string',
          format: 'id',
          example: '2'
        },
        date_begin: {
          type: 'string',
          format: 'datetime',
          example: '2020-09-18 12:00:00'
        },
        date_end: {
          type: 'string',
          format: 'datetime',
          example: '2020-09-18 17:00:00'
        }
      }
    },
    bidderItem: {
      type: 'object',
      properties: {
        id: {
          type: 'int',
          format: 'id',
          example: '1'
        },
        id_user: {
          type: 'int',
          format: 'id',
          example: '3'
        },
        id_bet: {
          type: 'int',
          format: 'id',
          example: '1'
        },
        price: {
          type: 'int',
          example: '10'
        },
        side: {
          type: 'bool',
          example: '0'
        }
      }
    },
    usertem: {
      type: 'object',
      properties: {
        id: {
          type: 'int',
          format: 'id',
          example: '1'
        },
        image: {
          type: 'string',
          format: 'url',
          example: 'https://i.ibb.co/4MRj6P2/IMG-7553.jpg'
        },
        firstname: {
          type: 'string',
          example: 'prenom'
        },
        lastname: {
          type: 'string',
          example: 'nom'
        }
      }
    },
    friendItem: {
      type: 'object',
      properties: {
        id: {
          type: 'int',
          format: 'id',
          example: '1'
        },
        id_user: {
          type: 'int',
          format: 'id',
          example: '1'
        },
        id_friend: {
          type: 'int',
          format: 'id',
          example: '3'
        }
      }
    }
  }
};

module.exports = swaggerDocument;
