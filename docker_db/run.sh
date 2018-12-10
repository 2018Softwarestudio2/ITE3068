docker build -t jung/mysql .
docker run -d -i -t -p 3306:3306 -e MYSQL_ROOT_PASSWORD="1234" --network hello-network --name mysql jung/mysql
