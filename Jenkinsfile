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
			
			stage('Sonarqube') {
				
				steps {
					nodejs(nodeJSInstallationName: 'nodejs'){
						withSonarQubeEnv('sonar') {
							sh 'npm install -f sonar-scanner'
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
