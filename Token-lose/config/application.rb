require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Venezuelasos
  class Application < Rails::Application
    config.action_mailer.delivery_method = :smtp

    config.action_mailer.smtp_settings = {
        address:"smtp.gmail.com",
        port:587,
        domain:"domain.of.sender.net",
        authentication: "plain",
        user_name:ENV['gmail'],
        password:ENV['gmail_password'],
        enable_starttls_auto: true
    }
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
