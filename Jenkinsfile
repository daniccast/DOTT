pipeline {
	agent any
		stages {
			stage('Build') {
				steps {
					sh 'echo "Step One build" '
				}
			}
			stage('SonarQube analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh "./gradlew sonarqube"
                }
            }
			}
			
			stage("Quality gate") {
				steps {
					waitForQualityGate abortPipeline: true
				}
			}

			stage('Testing') {
				steps {
					sh 'echo "Step Three" '
				}
			}

            stage('Deploy') {
				steps {
					sh 'echo "Step Three" '
				}
			}
		}
}
