class PasswordResetsController < ApplicationController
  def new

  end

  def create
    @user = User.find_by(params[:email])
        if @user
          @user.send_password_reset_email
          flash[:info] = "Email sent with password reset instructions"
          redirect_to "/password_resets/"
        else
          flash.now[:danger] = "Email address not found"
            redirect_to "/"
        end
  end

  def edit
    # @user = User.find_by(id: params[])
  end

  def update
    @user = User.find_by(params[:email])
    @user = User.update(params[:password])
    @user.save
  end
end
