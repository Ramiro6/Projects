class User < ApplicationRecord
  has_secure_password
  # before_create :generate_token
  # has_secure_token :reset_digest
  # attr_accessor :remember_token, :activation_token, :reset_token

  def create_reset_digest
   self.reset_token = User.new_token
   update_attribute(:reset_digest,  User.digest(reset_token))
 end

 # Sends password reset email.
 def send_password_reset_email
   generate_token(:reset_digest)
   save!
  #  self.password_resets_sent_at = Time.zone.now
   UserMailer.password_reset(self).deliver_now
 end


  def generate_token(column)
    begin
      self[column] = SecureRandom.urlsafe_base64
    end while User.exists?(column => self[column])
  end


end
