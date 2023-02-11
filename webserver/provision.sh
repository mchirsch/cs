apt update
apt install -y nginx 
apt install -y vsftpd

ufw allow ssh
ufw allow 'Nginx HTTP'
ufw allow 20,21,990/tcp
ufw allow 40000:50000/tcp
ufw enable
ufw status

cp /etc/vsftpd.conf /etc/vsftpd.orig
cat <<EOT >> /etc/vsftpd.conf

write_enable=YES

chroot_local_user=YES
allow_writeable_chroot=YES

user_sub_token=$USER
local_root=/var/www/html/$USER

pasv_min_port=40000
pasv_max_port=50000

# grant read to group owner (www-data)
local_umask=027
EOT

systemctl restart vsftpd
