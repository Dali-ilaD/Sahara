class CartItem < ApplicationRecord

    validates :quantity, :product_id, :user_id, presence: true


    belongs_to :user,
    class_name: :User

    belongs_to :product,
    class_name: :Product

end
