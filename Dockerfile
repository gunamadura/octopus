FROM  node:18-alpine
WORKDIR /myoctopus
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
