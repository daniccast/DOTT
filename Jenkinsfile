pipeline {
	agent any
		stages {
			stage('Build') {
				steps {
					sh 'echo "Step One build something else" '
				}
			}

			stage('Clone sources') {
				steps {
					git url: 'https://github.com/daniccast/DOTT.git'
				}
        	}
		    stage('Code Quality Check via SonarQube') {
				steps {
					script {
					def scannerHome = tool name: 'sonar_scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation';
						withSonarQubeEnv("SonarQube") {
						sh '''
						${tool("sonarqube")}/bin/sonar-scanner \
						-Dsonar.projectKey=DOTT \
						-Dsonar.sources=. \
						-Dsonar.css.node=. \
						-Dsonar.host.url=http://18.119.117.22:9000 \
						-Dsonar.login= 2ef9b5082d2a7e41ed9b4ba0f44ba413b4aef087
						'''
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
