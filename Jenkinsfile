node {

	stage('Clone'){
		git url: 'https://github.com/daniccast/DOTT.git'
	}

	stage('SonarQube analysis') {
		try{
			withSonarQubeEnv("sonar") {
				sh '''
						echo "Sonar start"
						/home/ubuntu/sonar-scanner-4.6.2.2472-linux/bin/sonar-scanner \
						-Dsonar.projectKey=DOTT \
						-Dsonar.sources=./services \
						-Dsonar.host.url=http://3.139.236.57:9000 \
						-Dsonar.login=1cdaaa0b1f555dc277c47a601e3ac6c8f0d3a0d0
					'''
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
		
			sh 'sudo docker build -t devops-api-node .'
			sh 'sudo docker run --name devops -dti -p 8000:8000 devops-api-node'
		}
		catch (exc){
			sh 'echo "No se pudo lanzar"'
		}
	}
}
