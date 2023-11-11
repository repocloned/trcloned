pipeline {
    agent {
        label 'docker'
    }
    stages {
        stage('Build Frontend') {
            steps {
                sh "docker build -f Frontend_Dockerfile ."
            }
        }
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