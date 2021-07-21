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
					script{
						try{
							withSonarQubeEnv('sonar') {
						
								sh '''
									echo "Sonar q"
									sonar-scanner \
									-Dsonar.projectKey=daniela \
									-Dsonar.sources=. \
								'''
							}
						}
						catch(exc){
								sh 'echo "No pasaron"'
							}
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
