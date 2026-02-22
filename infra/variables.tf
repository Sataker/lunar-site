variable "aws_region" {
  description = "AWS region for all resources"
  type        = string
  default     = "us-east-1"
}

variable "app_name" {
  description = "Name of the Amplify application"
  type        = string
  default     = "lunar-site"
}

variable "github_repository" {
  description = "GitHub repository URL (HTTPS)"
  type        = string
  default     = "https://github.com/PureAI-Tools/site-lunar"
}

variable "github_access_token" {
  description = "GitHub PAT (classic) with repo + admin:repo_hook scopes"
  type        = string
  sensitive   = true
}
