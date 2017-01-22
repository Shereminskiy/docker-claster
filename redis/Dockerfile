# Set the base image to Ubuntu
FROM ubuntu

# File Author / Maintainerr
MAINTAINER Alexander Shereminskiy

# Update the repository and install Redis Server
RUN         apt-get update && apt-get install -y redis-server
RUN         apt-get mc

# Expose Redis port 6379
EXPOSE      6379

# Run Redis Server
ENTRYPOINT  ["/usr/bin/redis-server"]