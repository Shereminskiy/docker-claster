# Set the base image to Ubuntu
FROM  node:6.9.4

# File Author / Maintainer
MAINTAINER Alexander Sheremisnkiy

# Install Node.js and other dependencies
RUN apt-get update && \
    apt-get -y install curl && \
    apt-get -y install python wget && \
    apt-get -y install mc

# Install nodemon
RUN npm install -g nodemon

# Provides cached layer for node_modules
#USER node
#ADD package.json /tmp/package.json
#RUN cd /tmp && npm install
#RUN mkdir -p /docker && cp -a /tmp/node_modules /docker/

RUN mkdir -p /docker && chown node:node /docker -R

USER node
ADD package.json /docker/package.json
RUN cd /docker && npm install
#RUN mkdir -p /docker && cp -a /tmp/node_modules /docker/

# Define working directory
WORKDIR /docker
ADD . /docker

# Expose port
EXPOSE  3000

# Run app using nodemon
CMD ["nodemon", "/docker/index.js"]
