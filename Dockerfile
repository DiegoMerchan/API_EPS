FROM node 
RUN mkdir /myapp
COPY / /myapp
WORKDIR /myapp
RUN npm install
RUN npm install -g nodemon 
RUN npm install --save mysql2
EXPOSE 3000
