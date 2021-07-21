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
									   ${tool("sonarqube")/bin/sonar-scanner \
						  				-Dsonar.organization=daniela \
										-Dsonar.projectKey=daniela  \
										-Dsonar.sources=. \
										-Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
										-Dsonar.exclusions=coverage/** \
										-Dsonar.host.url=http://10.3.0.173:9000
										'''
									}
								}
							}
							catch(exc){
								sh 'echo "No pasaron"'
							}
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
								sh 'npm start'
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
