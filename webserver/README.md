# Web Server

Launch a new instance (ubuntu LTS, t2 free tier, enable ssh, http, https) and log in using ssh: ssh ubuntu@ip

Add TCP ports 21 and 40000-50000 to inbound rules for the security group 

```
git clone https://github.com/mchirsch/cs
```

Provision the server:
```
sudo sh provision.sh 
```

Add a user:
```
sudo sh adduser.sh user pw
```

Add users from a file:
```
sudo xargs --max-lines=1 sh ~/cs/webserver/adduser.sh <users.txt
```

Enagle directory listing in nginx
```
/etc/nginx/sites-available/default
# add to location block
autoindex on;
```

# Notes
- Web root is /var/www/html
- vshttpd config: /etc/vshttpd.conf
- nginx config: /etc/nginx/sites-available/default
- permissions: group owner: www-data with group read access

How To Set Up vsftpd for a User's Directory on Ubuntu 20.04
https://www.digitalocean.com/community/tutorials/how-to-set-up-vsftpd-for-a-user-s-directory-on-ubuntu-20-04
