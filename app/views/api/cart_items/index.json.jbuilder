
json.cart_items do
     @cart_items.each do |cart_item|
        json.set! cart_item.id do 
            json.id cart_item.id
            json.product_id cart_item.product_id
            json.quantity cart_item.quantity
            json.user_id cart_item.user_id
        end
    end
end

json.products do 
 @cart_items.each do |cart_item|
    json.set! cart_item.product.id do 
        json.id cart_item.product.id
        json.name cart_item.product.name
        json.description cart_item.product.description
        json.price cart_item.product.price
        json.photoUrl cart_item.product.photo.url
    end
  end
end