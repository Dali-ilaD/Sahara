 json.set! @cart_item.id do 
    json.id @cart_item.id
    json.product_id @cart_item.product_id
    json.quantity @cart_item.quantity
    json.user_id @cart_item.user_id
end

