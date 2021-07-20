pipeline {
	agent any
		stages {
			stage('Build') {
				steps {
					sh 'echo "Step One build something else" '
				}
			}

			stage('Sonarqube') {
				environment {
					scannerHome = tool 'SonarQubeScanner'
				}
				steps {
					withSonarQubeEnv('SonarQubeScanner') {
						sh '''
						echo " SOANRQUBE"
						${scannerHome}/bin/sonar-scanner\
						-Dsonar.projectKey=DOTT \
						-Dsonar.sources=. \
						-Dsonar.css.node=. \
						-Dsonar.host.url=http://18.119.117.22:9000 \
						-Dsonar.login= 2ef9b5082d2a7e41ed9b4ba0f44ba413b4aef087
						'''
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
