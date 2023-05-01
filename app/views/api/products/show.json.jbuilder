json.product do
    json.extract! @product, :id, :name, :photo, :description
end



<h1><%= @products.name %></h1>
<img src="<%= @products.photo.url %>" alt="">

<p><%= @products.description %> </p>