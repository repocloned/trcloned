pipeline {
    agent {
        docker { image 'node:20.9.0-alpine3.18' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
//         stage('Build Frontend') {
//             steps {
//                 docker.build("taschenrechner_frontend", "-f Frontend_Dockerfile")
//             }
//         }
        stage('Test Backend') {
            steps {
                    sh "docker build -f Test_Dockerfile ."
            }
        }
        stage('Build Backend') {
            steps {
                sh "docker build -f Backend_Dockerfile ."
            }
        }
    }
}