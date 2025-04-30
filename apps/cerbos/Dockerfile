# Builder stage to set up directories
FROM alpine:3.18 as builder
RUN mkdir -p /cerbos/policies

# Final stage using official Cerbos image
FROM ghcr.io/cerbos/cerbos:latest as final
WORKDIR /cerbos

# Copy directory structure from builder
COPY --from=builder /cerbos .

# Copy configuration and policies
COPY ./config.yaml ./config.yaml
COPY ./policies ./policies/

# Use the same ports and command as original image
EXPOSE 3592 3593
CMD ["server", "--config=/config.yaml"]
