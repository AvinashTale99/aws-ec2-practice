# AWS EC2 Practice Project 🚀

This repository contains the hands-on tasks performed on an **AWS EC2 Linux instance**.  
The project covers installing and configuring Apache, Node.js, and MariaDB, as well as connecting a Node.js application with MySQL.

---

## ✅ Tasks Completed

### **Task 1: Apache Web Server**
- Updated packages.
- Installed Apache (`httpd`).
- Created and served a sample `index.html` page.

### **Task 2: Node.js Setup**
- Installed Node.js 18 and npm.
- Created a simple Node.js application (`app.js`).
- Verified server response using browser/curl.

### **Task 3: MariaDB (MySQL) Setup**
- Installed MariaDB server.
- Secured installation using `mysql_secure_installation`.
- Started and enabled the service.
- Connected Node.js app to MariaDB database.

---

## 📂 Command History Reference
A summary of important commands used (from `history`):

```bash
sudo yum update -y
sudo yum install git httpd -y
sudo systemctl start httpd
sudo systemctl enable httpd

# Node.js setup
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs
mkdir mynodeapp && cd mynodeapp
nano app.js
node app.js

# MariaDB setup
sudo yum install -y mariadb-server
sudo systemctl start mariadb
sudo systemctl enable mariadb
sudo mysql_secure_installation
```

---

## 🚀 How to Run

### Apache:
```bash
cd /var/www/html
echo "Hello from EC2" > index.html
sudo systemctl restart httpd
```

### Node.js App:
```bash
cd ~/mynodeapp
node app.js
```

### MariaDB:
```bash
sudo mysql -u root -p
```

---

## 📌 Notes
- Region used: **ap-south-1**
- Instance: **Amazon Linux 2**
- Node.js version: **v18.20.8**

---

## 🔗 Next Steps
- Push this project to GitHub.  
- Extend Node.js app with REST APIs connected to MySQL.  
- Deploy a full-stack app on EC2.

