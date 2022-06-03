.PHONY: all environment docker-dev docker-prod lint install-poetry start

.EXPORT_ALL_VARIABLES:
OS ?= $(shell python -c 'import platform; print(platform.system())')

IMAGE_NAME = omakase

all: environment start

environment:
	@echo 🔧 Setting Up Environment
	pip3 install 'poetry==1.1.6'
	poetry config virtualenvs.in-project true 
	poetry install
	$(NATRON_PATH)/natron-python -m pip install numpy

# Dev Server
start:
	poetry run uvicorn app.main:app --reload --port $(PORT)

# Docker
docker-build:
	@echo 🐳 Building Docker
	DOCKER_BUILDKIT=1 docker build -t $(IMAGE_NAME) .

docker-run:
	@echo 🐳 Running Docker
	COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose up --build

docker-dev:
	@echo 🐳 Running Docker in dev mode
	COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.dev.yml up --build

docker-prod:
	@echo 🐳 Running Docker in prod mode
	COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.prod.yml up --build

# Linting
lint:
	@echo 💚 Making things Pretty
	@echo 1.Pylint
	poetry run pylint --extension-pkg-whitelist=pydantic app tests
	@echo 2.Black Formatting
	poetry run black --diff --check app tests
	@echo 3.Mypy Static Typing
	poetry run mypy --config-file=pyproject.toml app tests

auto-lint:
	poetry run black app tests
	make lint