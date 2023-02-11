#add user
useradd $1
echo $1:$2 | chpasswd

#create home directory
mkdir /home/$1
chown $1 /home/$1

#create web directory
mkdir /var/www/html/$1
chown $1:www-data /var/www/html/$1

#set-group-ID so www-data inherits access to uploads
chmod g+s /var/www/html/$1
