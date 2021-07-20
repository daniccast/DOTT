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
			stage('Sonarqube') {
				environment {
					scannerHome = tool 'SonarQubeScanner'
				}
				steps {
					withSonarQubeEnv('sonarqube') {
						sh "${scannerHome}/bin/sonar-scanner"
					}
					timeout(time: 10, unit: 'MINUTES') {
						waitForQualityGate abortPipeline: true
					}
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
