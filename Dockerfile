### STAGE 1: Build the React app ###

FROM node:12.19-buster as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

### STAGE 2: Add Nginx for hosting the React app ###

FROM nginx:1.19 as production-stage

# Copy the bundle
COPY --from=build-stage /app/build /usr/share/nginx/html

# Copy the default nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
