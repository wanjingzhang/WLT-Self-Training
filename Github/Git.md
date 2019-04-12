# Git常用命令

```javascript
git init   
\\ 初始化git仓库                                         
ls -la
\\ 文件查看
git add index.html
\\ 添加指定文件
git add .
\\ 添加多个文件
git status
\\ 状态
git commit -m "reision one"
\\ 提交代码
git log
\\ 查看日志
git checkout about.html
\\ 抓取已经删除、修改的文件
git reset HEAD about.html
\\ Unstage已经上传的文件
git rm about.html
\\ 删除并上传
git checkout 54bcf...b51
\\ 切换分支
git branch
\\ 查看分之
git config --global user.name "wanjingzhang"
\\修改系统用户名
git config --global user.email 95616085@qq.com
\\修改系统邮箱
git config --list
\\查看配置文件列表
```