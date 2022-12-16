pipeline {
    agent any

    // agent {
    //     docker {
    //         image 'node:16.13.1-alpine'
    //     }
    // }

    // agent {
    //     label 'main-host'
    // }

    // tools {
    //     docker "latest"
    // }
    stages {
        stage('connect test'){
            steps{
                sh """
                echo connect web hook test
                """
            }
        }
         stage('Build') {
            agent {
                docker {
                    image 'node:18.12.1-alpine'
                }
            }
            steps {
                sh 'npm install'
                sh 'CI=false npm run build'
            }
        }

        stage('Docker build') {
            agent any
            steps {
                sh 'mv /root/config/nginx/nginx.conf nginx.conf'
                sh 'docker build -t my-tube-frontend:latest .'
            }
        }

        stage('Docker run') {
            agent any
            steps {
                sh 'docker ps -f my-tube-frontend -q | xargs --no-run-if-empty docker container stop'
                sh 'docker container ls -a -f name=my-tube-frontend -q | xargs -r docker container rm -f'
                sh 'docker images --no-trunc --all --quiet --filter="dangling=true" | xargs --no-run-if-empty docker rmi'
                sh 'docker run -d --name my-tube-frontend-dev -p 8090:80 --restart unless-stopped my-tube-frontend:latest'
            }
        }
    }
}