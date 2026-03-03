FROM denoland/deno:alpine-2.7.1
WORKDIR /app
COPY . .
RUN deno cache src/main.tsx
EXPOSE 8000
CMD ["deno", "run", "prod"]
