pipeline {
	agent any
		stages {
			stage('Build'){
				steps{
					git url: 'https://github.com/daniccast/DOTT.git'
				}
			}

			stage('Sonar') {
				steps {
					nodejs(nodeJSInstallationName: 'nodejs'){
						sh 'npm install'
						withSonarQubeEnv('sonar') {
						sh 'npm install sonar-scanner -f'
						sh 'npm run sonar'
						
						}
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
