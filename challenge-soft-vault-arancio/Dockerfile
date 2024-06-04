# Imagen construida en base a STAGES, se consigue asi una mejor optimizacion del tamaño.

# STAGE 1: Instalar las dependencias.

FROM node:18.20.3-alpine3.20 AS dependencies
WORKDIR /app
COPY package*.json ./
COPY .env.development .
COPY next.config.mjs .
ARG NODE_ENV
ENV NODE_ENV development
RUN npm install

# STAGE 2: buildear la aplicacion.
FROM node:18.20.3-alpine3.20 AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
RUN echo $(cat next.config.mjs)
COPY . .
RUN echo $(cat next.config.mjs)
RUN npm run build
RUN rm -r .next/cache

# STAGE 3: run app.
FROM node:18.20.3-alpine3.20 AS runner

WORKDIR /app
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

CMD ["npm", "run", "start"]
