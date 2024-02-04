FROM node:21-bullseye AS builder

WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx:1.25.3 AS runner
COPY --from=builder /app/out /usr/share/nginx/html
