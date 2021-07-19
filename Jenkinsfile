pipeline {
	agent any
		stages {
			stage('Build') {
				steps {
					sh 'echo "Step One build" '
				}
			}
			stage('SonarQube') {
				steps {
					sh 'echo "Step Two Sonar" '
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
