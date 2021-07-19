properties([pipelineTriggers([githubPush()])])

pipeline {
	agent any
		stages {
            stage('Checkout SCM') {
                steps {
                    checkout([
                    $class: 'GitSCM',
                    branches: [[name: 'master']],
                    userRemoteConfigs: [[
                        url: 'git@github.com:daniccast/DOTT.git',
                        credentialsId: '',
                    ]]
                    ])
                }
            }
			stage('Build') {
				steps {
					sh 'echo "Step One" '
				}
			}
			stage('SonarQube') {
				steps {
					sh 'echo "Step Two" '
				}
            } 

			stage('Testing') {
				steps {
					sh 'echo "Step Three" '
				}
			}

            stage('Deploy') {
				steps {
					sh 'echo "Step Three" '
				}
			}
		}
}
