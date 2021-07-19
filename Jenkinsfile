pipeline {
	agent any
		stages {
			stage('Build') {
				steps {
					sh 'echo "Step One build something else" '
				}
			}
			stage('SonarQube') {
				steps {
					sh 'echo "Step Two Sonar x" '
				}
            } 

			stage('Testing') {
				steps {
					sh 'echo "Step Three d" '
				}
			}

            stage('Deploy') {
				steps {
					sh 'echo "Step Three" '
				}
			}
		}
}
