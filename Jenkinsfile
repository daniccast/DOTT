pipeline {
	agent any
		stages {
			stage('Build') {
				steps {
					sh 'echo "Step One" '
				}
			}
			stage('SonarQube') {
				steps {
					sh 'echo "Step Two" '
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
