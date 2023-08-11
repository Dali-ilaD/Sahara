 @products.each do |product|
    json.set! product.id do
      json.id product.id
      json.name product.name
      json.description product.description
      json.price product.price
      json.photoUrl product.photo.url
    end
  