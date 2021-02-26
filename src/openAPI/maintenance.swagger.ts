export const getAllMaintenances = {
  summary: 'Get all maintenances',
  description: 'Get all the cars',
  produces: ['application/json'],
  parameters: [],
  tags: ['Maintenances'],
  responses: {
    '200': {
      description: 'A list of maintenance.',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              firstName: {
                type: 'string',
                description: 'First Name',
                example: 'John',
              },
              lastName: {
                type: 'string',
                description: 'Last Name',
                example: 'Doe',
              },
              carId: {
                type: 'string',
                description: 'Id of the car',
                example: 123544,
              },
              estimatedDate: {
                type: 'date',
                description: 'Date of the maintenance',
                example: '02/22/2021',
              },
            },
          },
        },
      },
    },
    '500': {
      description: 'Internal Server Error',
    },
  },
};

export const addMaintenance = {
  summary: 'Add a new car',
  description: 'Add a new maintenance',
  produces: ['application/json'],
  parameters: [],
  tags: ['Maintenances'],
  requestBody: {
    description: 'New Maintenance Data',
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            firstName: {
              type: 'string',
              description: 'First Name',
              example: 'John',
            },
            lastName: {
              type: 'string',
              description: 'Last Name',
              example: 'Doe',
            },
            carId: {
              type: 'string',
              description: 'Id of the car',
              example: 123544,
            },
            estimatedDate: {
              type: 'date',
              description: 'Date of the maintenance',
              example: '02/22/2021',
            },
          },
        },
      },
    },
  },
  responses: {
    '200': {
      description: 'A new car.',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              firstName: {
                type: 'string',
                description: 'First Name',
                example: 'John',
              },
              lastName: {
                type: 'string',
                description: 'Last Name',
                example: 'Doe',
              },
              carId: {
                type: 'string',
                description: 'Id of the car',
                example: 123544,
              },
              estimatedDate: {
                type: 'date',
                description: 'Date of the maintenance',
                example: '02/22/2021',
              },
            },
          },
        },
      },
    },
    '500': {
      description: 'Internal Server Error',
    },
  },
};
