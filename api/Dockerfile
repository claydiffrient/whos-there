FROM node:6.0.0

ENV APP_HOME /usr/src/app

RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY package.json /usr/src/app

RUN npm install --loglevel error

COPY . /usr/src/app

RUN npm run build && \
    npm cache clean && \
    wget https://github.com/Yelp/dumb-init/releases/download/v1.0.3/dumb-init_1.0.3_amd64.deb && \
    dpkg -i dumb-init_*.deb

EXPOSE 3000

CMD ["dumb-init", "npm", "start"]
