pipeline {
	agent any
		stages {
			stage('Clone'){
				steps{
					git url: 'https://github.com/daniccast/DOTT.git'
				}
			}

			stage('Build') {
				steps {
					nodejs(nodeJSInstallationName: 'nodejs'){
						sh 'npm install'
					}
				}
			}

			stage('SonarQube analysis') {
				steps {
					withSonarQubeEnv('sonar') {
						sh '''
						echo "Sonar q"
						pwd
						 sonar-scanner \
						-Dsonar.projectKey=099295bf279ba94f1f6a5d819a16a114d9a962d7 \
						-Dsonar.sources=. \
						-Dsonar.host.url=http://10.3.0.173:9000 \
						-Dsonar.login=2ef9b5082d2a7e41ed9b4ba0f44ba413b4aef087
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
