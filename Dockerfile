FROM node:18.16.0-alpine3.17 as builder 

ARG APP_MAINTAINER="Beautix team"
ARG APP_DESCRIPTION="e-commerce built with React"
ENV APP_PORT=80
ENV NODE_ENV="development"

LABEL "maintainer" = $APP_MAINTAINER
LABEL "description" = $APP_DESCRIPTION
LABEL "enviroment" = $NODE_ENV

WORKDIR /app 

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --silent

COPY . ./
RUN yarn build:"${NODE_ENV}"

FROM nginx:stable-alpine
EXPOSE ${APP_PORT}
COPY docker-config/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

# example generate image
# docker build -t beautix-image .

# example run container
# docker run -p 80:80 beautix-image
