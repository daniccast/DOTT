pipeline {
	agent any
		stages {
			stage('Build') {
				steps {
					sh 'echo "Step One build something else" '
				}
			}

			stage('Clone sources') {
				steps {
					git url: 'https://github.com/daniccast/DOTT.git'
				}
        	}
			stage('SonarQube analysis') {
				steps {
					withSonarQubeEnv('SonarQube') {
						sh './gradlew sonarqube'
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
					sh 'echo "Step Three ddd" '
				}
			}

            stage('Deploy') {
				steps {
					sh 'echo "Step Three" '
				}
			}
		}
}
