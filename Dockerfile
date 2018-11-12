FROM mhart/alpine-node:8

# need to install Bash as it doenst port with this image
RUN apk add --no-cache bash

#change to tmp folder this helps caching npm pakages for faster build next time
WORKDIR /tmp
COPY package.json /tmp/
COPY yarn.lock /tmp/
RUN npm config set registry http://registry.npmjs.org/ && yarn

#Export unity env 
ENV  UNITY_URL=https://unity.krds.com/
ENV  UNITY_TOKEN=Uty99iAowuaWGu7hxsS1RjOx4nk6vkemZ4hKCG00

#SET working dir and copy files to it
WORKDIR /usr/src/app
COPY . /usr/src/app/

# Create quotes directory
RUN mkdir -p /usr/src/app/public/quotes

# LOGS VOLUME 
VOLUME ["/var/log/hp-supplies-bot/", "/usr/src/hp-supplies-bot/public"]

#copy node_modules folder from tmp 
RUN cp -a /tmp/node_modules /usr/src/app/

#Run angular build
RUN yarn build

ARG NODE_ENV=local
ENV NODE_ENV=${NODE_ENV}

#DEFAULT IS SET TO dev url
ARG APP_URL=https://hp-supplies-bot-dev.dev.kacdn.net
ENV APP_URL=${APP_URL}

RUN echo ${NODE_ENV} ${APP_URL}

#expose port 
EXPOSE 3000

#strat the app
CMD [ "node", "server" ]

