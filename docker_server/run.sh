sudo docker build -t jung/node-web-app .
sudo docker run -d -i -t -p 49601:3000 --network hello-network --name node jung/node-web-app
