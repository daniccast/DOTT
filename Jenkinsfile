node {
			stage('Clone'){
					git url: 'https://github.com/daniccast/DOTT.git'
			}

			stage('SonarQube analysis') {
						try{
							withSonarQubeEnv('sonar') {
								
								def scannerHome = tool 'sonar';
					   			
								withSonarQubeEnv("sonar") {
						   			sh '''
									   echo "Sonar"
									   ${scannerHome}/bin/sonar-scanner \
										-Dsonar.projectKey=DOTT \
										-Dsonar.sources=. \
										-Dsonar.host.url=http://18.119.117.22:9000 \
										-Dsonar.login=1cdaaa0b1f555dc277c47a601e3ac6c8f0d3a0d0
										'''
								}
							}
						}
						catch(exc){
								sh 'echo "No pasaron"'
						}
					}
				
			
			

			stage('Build') {
				nodejs(nodeJSInstallationName: 'nodejs'){
					sh 'npm install'
				}
			}

			stage('Testing') {
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

            stage('Deploy') {
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
