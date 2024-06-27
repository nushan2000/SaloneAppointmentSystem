pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE_FRONTEND = 'nushan2000/saloneappointmentsystem-frontend'
        DOCKER_IMAGE_BACKEND = 'nushan2000/saloneappointmentsystem-backend'
        DOCKER_REGISTRY = 'docker.io'
        MONGO_URI = 'mongodb+srv://eanushan:TDe8QaxuYHpcxNNu@cluster0.lfqxwj4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        DOCKERHUB_PASSWORD = 'Nu#123456'
    }

    stages {
        stage('Checkout Code') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/nushan2000/SaloneAppointmentSystem.git'
                }
               
                
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    bat "docker build -t ${DOCKER_IMAGE_FRONTEND}:${BUILD_NUMBER} frontend"
                    bat "docker build -t ${DOCKER_IMAGE_BACKEND}:${BUILD_NUMBER} backend"
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                script {
                    bat "docker login -u nushan2000 -p ${DOCKERHUB_PASSWORD}"
                }
            }
        }

        stage('Push Images') {
            steps {
                script {
                    bat "docker push ${DOCKER_IMAGE_FRONTEND}:${BUILD_NUMBER}"
                    bat "docker push ${DOCKER_IMAGE_BACKEND}:${BUILD_NUMBER}"
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    bat 'docker-compose down'
                    bat 'docker-compose up -d'
                }
            }
        }
    }

    post {
        always {
            script {
                bat 'docker logout'
            }
            deleteDir()
        }
    }
}

