class UserMailer < ApplicationMailer
  default form: "ramiroruiz578@gmail.com"

  def welcome_mailer(user)
    @user = user
    mail(to: @user.email, subject: "Welcome")
  end
end
