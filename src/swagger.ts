import { addCar, getCars } from './openAPI/cars.swagger';
import { addMaintenance, getAllMaintenances } from './openAPI/maintenance.swagger';

export const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'API Agencia (Prueba Fullstack)',
    description: 'Esta es la api para la prueba de desarrollador Fullstack',
    termsOfService: '',
    contact: {
      name: 'Jose Masri Salame',
      email: 'josemasri222@gmail.com',
      url: 'https://pruebafullstack.xom',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  tags: [
    {
      name: 'Cars',
    },
    {
      name: 'Maintenances',
    },
  ],
  paths: {
    '/car': {
      get: getCars,
      post: addCar
    },
    '/maintenance': {
      get: getAllMaintenances,
      post: addMaintenance
    },
  },
};
