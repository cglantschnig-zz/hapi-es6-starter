
# start from an empty centos7 machine
FROM centos:7

MAINTAINER Christopher Glantschnig <christopher.glantschnig@gmail.com>

# install update centos and install git, nodejs and npm
RUN yum install -y epel-release git-core
RUN yum install -y nodejs npm

# copy whole directoy to /server
ADD . /server

WORKDIR /server

# install all dependencies defined in the package.json
RUN npm install

EXPOSE 3001

CMD ["npm", "start"]
