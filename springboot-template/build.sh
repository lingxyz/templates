# 本地快速重启远程服务。用于调试。
#!/bin/bash
#ssh root@110.40.190.168 > /dev/null 2>&1 << eeooff
# 命令行从窗口，输入密码...
cd /www/template/springboot-template
git pull
./gradlew bootrun --args='--spring.profiles.active=prd'
exit
eeooff
echo done! at `date "+%Y-%m-%d %H:%M:%S"`
