
pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'your-docker-image-name'
        DOCKER_REGISTRY = 'your-docker-registry'
        MONGO_URI = 'mongodb+srv://eanushan:TDe8QaxuYHpcxNNu@cluster0.lfqxwj4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/nushan2000/SaloneAppointmentSystem.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    def frontendImage = docker.build("${DOCKER_IMAGE}-frontend", "frontend")
                    def backendImage = docker.build("${DOCKER_IMAGE}-backend", "backend")
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    docker.withRegistry("https://${DOCKER_REGISTRY}", 'docker-credentials-id') {
                        frontendImage.push('latest')
                        backendImage.push('latest')
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'docker-compose down'
                    sh 'docker-compose up -d'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
