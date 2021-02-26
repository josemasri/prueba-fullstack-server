FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

COPY tsconfig.json ./

COPY .env ./

COPY ./src ./src

RUN npm run build

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "dist/app.js" ]
