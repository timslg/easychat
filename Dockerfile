# Build Stage
FROM node:18.18.0 as node
WORKDIR /app
COPY easychat/. .
RUN npm install
RUN npm run build --prod

# Deploy Stage
FROM nginx:alpine
COPY --from=node /app/dist/easychat /usr/share/nginx/html