export const getCars = {
  summary: 'Get all the cars',
  description: 'Get all the cars',
  produces: ['application/json'],
  parameters: [],
  tags: ['Cars'],
  responses: {
    '200': {
      description: 'A list of cars.',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              id: {
                type: 'number',
                description: 'Car id',
                example: 33460,
              },
              image: {
                type: 'string',
                description: 'Car image url',
                example:
                  'https://s1.cdn.autoevolution.com/images/news/2021-mercedes-c-class-accurately-rendered-looks-identical-to-the-e-class-141695-7.jpg',
              },
              make: {
                type: 'string',
                description: 'Car make',
                example: 'Volkswagen',
              },
              model: {
                type: 'string',
                description: 'Car model',
                example: 'Vento',
              },
              description: {
                type: 'string',
                description: 'description of the car',
                example:
                  'Irure minim consectetur amet est tempor fugiat laborum ut do ut labore duis commodo proident.',
              },
              km: {
                type: 'number',
                description: 'Current kilometers of the car',
                example: 2000,
              },
              estimatedate: {
                type: 'date',
                description: 'Mantainance estimate date',
                example: '2020/20/12',
              },
            },
          },
          example: [
            {
              description: ' change of suspension',
              make: 'Nissan',
              model: 'Versa',
              estimatedate: '2021/12/01',
              id: 3340,
              image: 'http://3.23.108.188/cars/versa.jpg',
            },
            {
              description: ' motor adjustment',
              make: ' Honda ',
              model: 'CR-V',
              estimatedate: '',
              id: 3341,
              image: 'http://3.23.108.188/cars/CR-V.jpg',
            },
            {
              description: ' engine tuning ',
              make: 'Honda',
              model: 'Civic',
              estimatedate: '2020/20/12',
              id: 3342,
              km: 90000,
              image: 'http://3.23.108.188/cars/civic.jpg',
            },
            {
              description: ' oil change ',
              make: ' Volkswaguen',
              model: 'Tiguan',
              km: 13500,
              id: 3343,
              image: 'http://3.23.108.188/cars/tiguan.jpg',
            },
            {
              description: ' change of pads ',
              make: ' Nissan ',
              model: 'Sentra',
              km: 6000,
              id: 3344,
              image: 'http://3.23.108.188/cars/sentra.jpg',
            },
            {
              description: ' change of pads ',
              make: 'Volkswagen',
              model: 'Vento',
              km: 80050,
              id: 3345,
              image: 'http://3.23.108.188/cars/vento.jpg',
            },
            {
              description: 'Change Transmission (CVT)',
              make: 'Chevrolet',
              model: 'Aveo NG',
              estimatedate: '2021/09/07',
              km: 33460,
              image: 'http://3.23.108.188/cars/aveo.jpg',
            },
            {
              description: 'Change ligths',
              make: 'Chevrolet',
              model: 'Spark',
              km: 16098,
              id: 3347,
              image: 'http://3.23.108.188/cars/spark.jpg',
            },
          ],
        },
      },
    },
    '500': {
      description: 'Internal Server Error',
    },
  },
};

export const addCar = {
  summary: 'Add a new car',
  description: 'Add a new car to the system',
  produces: ['application/json'],
  parameters: [],
  tags: ['Cars'],
  requestBody: {
    description: 'New Car Data',
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            id: {
              type: 'number',
              description: 'Car id',
              example: 33460,
            },
            image: {
              type: 'string',
              description: 'Car image url',
              example:
                'https://s1.cdn.autoevolution.com/images/news/2021-mercedes-c-class-accurately-rendered-looks-identical-to-the-e-class-141695-7.jpg',
            },
            make: {
              type: 'string',
              description: 'Car make',
              example: 'Volkswagen',
            },
            model: {
              type: 'string',
              description: 'Car model',
              example: 'Vento',
            },
            description: {
              type: 'string',
              description: 'description of the car',
              example:
                'Irure minim consectetur amet est tempor fugiat laborum ut do ut labore duis commodo proident.',
            },
            km: {
              type: 'number',
              description: 'Current kilometers of the car',
              example: 2000,
            },
            estimatedate: {
              type: 'date',
              description: 'Mantainance estimate date',
              example: '2020/20/12',
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
              image: {
                type: 'string',
                description: 'Car image url',
                example:
                  'https://s1.cdn.autoevolution.com/images/news/2021-mercedes-c-class-accurately-rendered-looks-identical-to-the-e-class-141695-7.jpg',
              },
              brand: {
                type: 'string',
                description: 'Car brand',
                example: 'Mercedes Benz',
              },
              subBrand: {
                type: 'string',
                description: 'Car sub brand',
                example: 'C200',
              },
              description: {
                type: 'string',
                description: 'description of the car',
                example:
                  'Irure minim consectetur amet est tempor fugiat laborum ut do ut labore duis commodo proident.',
              },
              currentKm: {
                type: 'number',
                description: 'Current kilometers of the car',
                example: 2000,
              },
            },
          },
          example: {
            description: ' change of suspension',
            make: 'Nissan',
            model: 'Versa',
            estimatedate: '2021/12/01',
            id: 3340,
            image: 'http://3.23.108.188/cars/versa.jpg',
          },
        },
      },
    },
    '500': {
      description: 'Internal Server Error',
    },
  },
};
