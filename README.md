# 🚀 AWS EC2 Practice Tasks

This repository documents the hands-on practice I performed on an **Amazon EC2 Linux instance**.  
I worked on hosting a static website, deploying a Node.js app, and setting up a MySQL/MariaDB database.

---

## 📌 Task 1: Host a Static Website with Apache
- Launched an **Amazon EC2 (Amazon Linux 2023)** instance.
- Installed and started Apache web server:
  ```bash
  sudo yum install -y httpd
  sudo systemctl start httpd
  sudo systemctl enable httpd
Created a sample index.html in /var/www/html/.

Accessed the site using the EC2 Public IPv4 address.

✅ Website was successfully served over HTTP (port 80).

📌 Task 2: Deploy a Simple Node.js App
Installed Node.js:

bash
Copy code
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs
Verified installation:

bash
Copy code
node -v
npm -v
Created a Node.js server (app.js) that listens on port 3000 and serves a simple HTML response.

Updated EC2 security group to allow port 3000.

Accessed the app in the browser:

cpp
Copy code
http://<ec2-public-ip>:3000
✅ Node.js server running successfully.

📌 Task 3: Install and Configure MySQL (MariaDB)
Installed MariaDB on Amazon Linux 2023:

bash
Copy code
sudo dnf install -y mariadb105-server
sudo systemctl start mariadb
sudo systemctl enable mariadb
Secured the installation:

bash
Copy code
sudo mysql_secure_installation
Logged into MySQL and created a database + table:

sql
Copy code
CREATE DATABASE studentdb;
USE studentdb;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  age INT
);

INSERT INTO students (name, age) VALUES
('Avinash', 24),
('Rahul', 22),
('Sneha', 23);
SELECT * FROM students;
✅ Database was created, and records were inserted successfully.

📌 Task 4 (In Progress): Connect Node.js App to MySQL
Installed MySQL client + driver for Node.js:

bash
Copy code
cd ~/mynodeapp
npm init -y
npm install mysql2
Updated app.js to fetch data from MySQL using /users route.

✅ Work in progress (currently resolving npm permissions & module installation issues).

🛠️ Commands Reference (Appendix)
Below is the exact command history used while performing Task 1, 2, and 3:

bash
Copy code
 1  ls
 2  sudo yum update -y
 3  clear
 4  sudo yum install git httpd
 5  git -v
 6  httpd -v
 7  sudo systemctl start httpd
 8  sudo systemctl status httpd
 9  ls
10  sudo yum install tree -y
11  tree
12  cd var/www/html
13  cd /var/www/html
14  ls
15  sudo nano index.html
16  git add .
17  git init
18  sudo systemctl stop httpd
19  sudo systemctl start httpd
20  sudo systemctl stop httpd
21  sudo systemctl status httpd
22  sudo systemctl disable httpd
23  sudo systemctl status httpd
24  clear
25  curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
26  sudo yum install -y nodejs
27  npm -v
28  node -v
29  mkdir mynodeapp
30  sudo mkdir mynodeapp
31  ls
32  cd mynodeapp/
33  sudo nano app.js
34  node app.js
35  sudo nano app.js
36  node app.js
37  clear
38  sudo yum update -y
39  sudo yum install -y mariadb-server
40  sudo systemctl start mariadb
41  sudo systemctl enable mariadb
42  sudo yum install -y mariadb-server
43  sudo mysql_secure_installation
44  sudo dnf update -y
45  sudo dnf install -y mariadb105
46  sudo mysql_secure_installation
47  sudo systemctl start mariadb
48  sudo systemctl enable mariadb
49  dnf search mariadb
50  sudo dnf install -y mariadb105-server
51  sudo systemctl start mariadb
52  sudo systemctl enable mariadb
53  sudo systemctl status mariadb
54  clear
55  sudo mysql_secure_installation
56  sudo mysql -u root -p
57  LS
58  ls
59  sudo nano app.js
60  node app.js
61  cd ..
62  ls
63  cd ..
64  ls
65  mkdir mynodeapp
66  sudo mkdir mynodeapp
67  ls
68  sudo nano app.js
69  node app.js
70  ls
71  cd mynodeapp/
72  ls
73  sudo nano app.js
74  node app.js
75  npm init -y
76  mv /mynodeapp ~/mynodeapp
77  cd ~/mynodeapp
78  npm init -y
79  history
