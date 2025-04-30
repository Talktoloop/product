# Use the official Cerbos image as the base
FROM ghcr.io/cerbos/cerbos:latest as final

WORKDIR /cerbos

# Expose the necessary ports
EXPOSE 3592

# Copy your configuration file and policies
COPY ./config.yaml /config.yaml
COPY ./policies /policies

# Set the command to run Cerbos server with your config
CMD ["server", "--config=/config.yaml"]
