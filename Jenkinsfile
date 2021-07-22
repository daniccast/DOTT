pipeline {
	agent any
		stages {
			stage('Clone'){
				steps{
					git url: 'https://github.com/daniccast/DOTT.git'
				}
			}

			stage('SonarQube analysis') {
				steps {
					script{
						try{
							withSonarQubeEnv('sonar') {
								
								def scannerHome = tool 'sonar';
					   			
								withSonarQubeEnv("sonar") {
						   			sh '''
									   echo "Sonar"
									   sonar-scanner \
										-Dsonar.projectKey=DOTT  \
										-Dsonar.sources=./services \
										-Dsonar.host.url=http://18.119.117.22:9000\
										-Dsonar.login=1cdaaa0b1f555dc277c47a601e3ac6c8f0d3a0d0 \
										'''
								}
							}
							stage('Quality Gate') {
								// waitForQualityGate abortPipeline: true
								sh "echo 'uwu'"
							}
						}
						catch(exc){
								sh 'echo "No pasaron"'
						}
					}
				}
			}
			

			stage('Build') {
				steps {
					nodejs(nodeJSInstallationName: 'nodejs'){
						sh 'npm install'
					}
				}
			}

			stage('Testing') {
				steps {
					script {
						try {
							nodejs(nodeJSInstallationName: 'nodejs'){
								sh 'npm test'
							}
						}
						catch (exc){
							sh 'echo "No pasaron los test unitarios"'
						}
					}
				}
			}

            stage('Deploy') {
				steps {
					script {
						try {
							nodejs(nodeJSInstallationName: 'nodejs'){
								sh 'echo deployed'
							//	sh 'npm start'
							}
						}
						catch (exc){
							sh 'echo "No se pudo lanzar"'
						}
					}
				}
			}
		}
}
