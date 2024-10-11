# cohort_group1
![alt text](image.png)

AWS resource will be plan to use as listed below :
- Amazon Elastic Container Registry (ECR): Stores the Docker images pushed from the CI/CD pipeline.
- Amazon Elastic Container Service (ECS): Deploys and manages the Docker containers in the defined environment (dev, stage, prod).
- AWS Secrets Manager: Manages and retrieves sensitive credentials such as AWS keys.
- AWS IAM: Used to provide roles and permissions for GitHub Actions to interact securely with AWS services.

- optional :

AWS CloudWatch: Monitors ECS services and collects logs for visibility into the application’s performance. - need figure out more