class SessionsController < ApplicationController

  def admin

  end

  def reset_user
    @user = User.find_by(email: params[:email]) #ojo aqui
    if @user
      @user.create_reset_digest
      @user.send_password_reset_email
      flash[:info] = "Your Email its send"
      redirect_to "/"
    end

  end


  def new
    @new = User.new
  end

  def user_create
    if @new = User.new(new_user)
      @new.save
      UserMailer.welcome_mailer(@new).deliver_now

    end
  end

  def create
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to "/index/#{user.id}"
    else
      redirect_to "/login"
    end
  end

  def destroy
    session.clear
    redirect_to "/login"
  end

  private
  def new_user
    params.require(:user).permit(:email, :password)
  end
end
