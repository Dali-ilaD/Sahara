json.product do
    json.extract! @product, :id, :name, :description :price
    json.photoUrl @product.photo.attached? ? @product.photo.url : nil
end
