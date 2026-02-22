output "amplify_app_id" {
  description = "Amplify application ID"
  value       = aws_amplify_app.this.id
}

output "amplify_default_domain" {
  description = "Default Amplify URL for the main branch"
  value       = "https://main.${aws_amplify_app.this.id}.amplifyapp.com"
}
