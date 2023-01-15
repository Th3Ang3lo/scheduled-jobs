## About the project
A simple project to test Agenda package.

## Requirements: NodeJS 18, Yarn and Docker.
Make sure you have them installed on your PC.

## Running the project
1 - Clone the project
```zsh
git clone https://github.com/Th3Ang3lo/scheduled-jobs.git
```

2 - Change the project directory
```zsh
cd scheduled-jobs
```

3 - Install yarn dependencies
```zsh
yarn
```

4 - Copy .env.example to .env file
```zsh
cp .env.example .env
```

5 - Create docker containers
```zsh
docker-compose up -d
```

6 - Running the project
```zsh
yarn dev
```
