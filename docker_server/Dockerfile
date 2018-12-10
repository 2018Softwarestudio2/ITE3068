FROM node:8

# 앱 디렉터리 생성
WORKDIR /usr/src/app

# 앱 의존성 설치
RUN apt update
RUN apt -y upgrade
RUN apt -y install vim
RUN npm install react
RUN npm install -g create-react-app
RUN create-react-app my-app
RUN npm install axios
RUN npm install d3
RUN npm install d3-axis
WORKDIR /usr/src/app/my-app/src
RUN rm -rf *
WORKDIR /usr/src/app/my-app/public
RUN rm index.html
WORKDIR /usr/src/app/my-app

# 앱 소스 추가
COPY ./src ./src
COPY ./public ./public

EXPOSE 8080
CMD [ "npm", "start" ]

