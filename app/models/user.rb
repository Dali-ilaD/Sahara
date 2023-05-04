class User < ApplicationRecord
  has_secure_password

  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :username,
    length: { in: 3..25, message:'Your Username must be between 3-25 characters long.' },
    format: { without: URI::MailTo::EMAIL_REGEXP,message:  "Your Username can not be an email."}
  validates :email, 
    length: {in: 3..255},
    format: { with: URI::MailTo::EMAIL_REGEXP, message: "Please enter a valid Email"}
  validates :password, length: { in: 6..255 }, allow_nil: true

  before_validation :ensure_session_token

  def self.find_by_credentials(credential,password)
    field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : :username
    user = User.find_by(field => credential)
    user&.authenticate(password)
  end

  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)
    self.session_token
  end

  has_many :cart_items,
  dependent: :destroy

  private 
  
  def generate_unique_session_token
    loop do
      token = SecureRandom.base64
      break token unless User.exists?(session_token: token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end


end
 