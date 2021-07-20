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
						withSonarQubeEnv("SonarQube") {
						 sh "/home/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/sonarqubescanner/bin/sonar-scanner -Dsonar.host.url=http://18.119.117.22:9000 -Dsonar.projectName=meanstackapp -Dsonar.projectVersion=1.0 -Dsonar.projectKey=meanstack:app -Dsonar.sources=. -Dsonar.projectBaseDir=/home/jenkins/workspace/sonarqube_test_pipeline"
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
