# hapi-es6-starter

A little startup project using hapi, es6 and docker.

## Prerequisites

Install [Docker](https://www.docker.com/) on your system.

* [Install instructions](https://docs.docker.com/installation/mac/) for Mac OS X
* [Install instructions](https://docs.docker.com/installation/ubuntulinux/) for Ubuntu Linux
* [Install instructions](https://docs.docker.com/installation/) for other platforms

Install [Docker Compose](http://docs.docker.com/compose/) on your system.

* Python/pip: `sudo pip install -U docker-compose`
* Other: ``curl -L https://github.com/docker/compose/releases/download/1.1.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose; chmod +x /usr/local/bin/docker-compose``

## Setup

First you need to run `docker-compose build` in order to download all the required
containers and build it. Next you need `docker-compose up` to run a container from
the created image.

    # docker-compose build
    # docker-compose up

Now you can easily view the website at `http://localhost` on your host machine.

## License

[View the License](LICENSE)

## Contribution

Feel free to fork and make pull requests! I am very happy to see new stuff and
merge it into the project
