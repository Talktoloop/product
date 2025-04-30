# Final stage using official Cerbos image
FROM ghcr.io/cerbos/cerbos:latest as final

# Copy configuration and policies
COPY ./config.yaml /config.yaml
COPY ./policies /policies/

# Use the same ports and command as original image
EXPOSE 3592 3593
CMD ["server", "--config=/config.yaml"]
