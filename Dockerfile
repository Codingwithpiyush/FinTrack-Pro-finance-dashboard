FROM node:18

WORKDIR /app

COPY . .

RUN npm install
RUN cd backend && npm install

EXPOSE 7860

CMD ["node", "backend/server.js"]