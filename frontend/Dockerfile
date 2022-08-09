# base image  
FROM node:18

# set working direction
WORKDIR /app
# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH
# # install application dependencies
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm i
# # add app
# COPY . ./
COPY build/ ./build
#RUN npm run build
RUN npm install -g serve
# start app
EXPOSE 3000
CMD ["serve", "-s", "build"]
