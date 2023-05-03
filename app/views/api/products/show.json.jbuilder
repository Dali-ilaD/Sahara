json.product do
    json.extract! @product, :id, :name, :description
    json.photoUrl @product.photo.attached? ? @product.photo.url : nil
end



