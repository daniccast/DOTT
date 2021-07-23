FROM node:9-alpine

WORKDIR /app

COPY package.json .

COPY . .

CMD ["npm", "start"]
# docker build -t devops-api-node .
# docker run --name devops -dti -p 8000:8000 devops-api-node
