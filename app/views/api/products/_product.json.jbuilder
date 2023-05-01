
json.extract! product, :id, :name
json.photoUrl product.photo.attached? ? product.photo.url : nil