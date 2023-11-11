pipeline {
    agent any
    stages {
        stage('Build Frontend') {
            steps {
                docker.build("taschenrechner_frontend", "-f Frontend_Dockerfile")
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