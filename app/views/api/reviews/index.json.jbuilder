json.array! @reviews do |review|
    json.id review.id
    json.body review.body
    json.rating review.rating
  end

# json.array! @reviews.select { |review| review.product_id == params[:product_id] } do |review|
#   json.id review.id
#   json.body review.body
#   json.rating review.rating
#   json.user_id review.user_id
#   json.product_id review.product_id
#   json.user_name review.user_id.username 
# end