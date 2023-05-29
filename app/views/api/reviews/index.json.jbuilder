json.array! @reviews do |review|
    json.id review.id
    json.body review.body
    json.rating review.rating
  end