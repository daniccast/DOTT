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
						script{
							try{
								sh '''
									echo "Sonar q"
									sonar-scanner \
									-Dsonar.projectKey=daniela \
									-Dsonar.sources=. \
								'''
							} catch(exc){
								sh 'echo "no se pudo"'
							}
						}
						
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
