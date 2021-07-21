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
				environment {
					scannerHome = tool 'sonar'
				}
				steps {
					withSonarQubeEnv('sonar') {
						sh '''
						echo "Sonar q"
						${scannerHome}/bin/sonar-scanner \
						-Dsonar.projectKey=daniela \
						-Dsonar.sources=. \
						-Dsonar.host.url=http://18.119.117.22:9000 \
						-Dsonar.login=099295bf279ba94f1f6a5d819a16a114d9a962d7
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
