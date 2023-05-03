# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"


ApplicationRecord.transaction do 
  #   puts "Destroying tables..."
  #   # Unnecessary if using `rails db:seed:replant`
  #   User.destroy_all
  
  #   puts "Resetting primary keys..."
  #   # For easy testing, so that after seeding, the first `User` has `id` of 1
  #   ApplicationRecord.connection.reset_pk_sequence!('users')
  
  #   puts "Creating users..."
  #   # Create one user with an easy to remember username, email, and password:
  #   User.create!(
  #     username: 'Demo-lition', 
  #     email: 'demo@user.io', 
  #     password: 'password'
  #   )
  
  #   # More users
  #   5.times do 
  #     User.create!({
  #       username: Faker::Internet.unique.username(specifier: 3..9),
  #       email: Faker::Internet.unique.email,
  #       password: Faker::Internet.password(min_length: 6, max_length: 30)
  #     }) 
  #   end
  
  #   products =
  #   3.times do
  #   Product.create!([
  #     {
  #       seller_id: 3,
  #       name: 'Pink stuff',
  #       description:Faker::Lorem.paragraph,
  #       price: Faker::Commerce.price
  #     },
  #     {
  #       seller_id: 3,
  #       name: 'Cleaning Wipes',
  #       description:'Wipe away any dirt or grim with the best cleaning wipes on the market. After reviews from so many stay at home spouses',
  #       price: Faker::Commerce.price
  #     },
  #     {
  #       seller_id: 3,
  #       name: 'Microfiber Cloth',
  #       description:Faker::Lorem.paragraph,
  #       price: Faker::Commerce.price
  #     },
  #     {
  #       seller_id: 3,
  #       name: 'Yellow Sponge',
  #       description:'The staple of every kitchen that has ever had a dirty dish, the yellow sponge is the most basic and essential tool of any kitchen owner/operator.',
  #       price: Faker::Commerce.price
  #     },
  #     {
  #       seller_id: 3,
  #       name: 'Broom',
  #       description:'One of the oldest cleaning tools in the world',
  #       price: Faker::Commerce.price
  #     },
  #     {
  #       seller_id: 3,
  #       name: 'Bedframe',
  #       description:'
  #       All-in-One Package: This storage bed frame comes in only one box with the complete accessories you need to assemble now.
  #       Space-saving Functionality: With four storage drawers underneath, this platform bed frame offers perfect storage space for bed sheets, accessories, off-season clothing, etc.
  #       Lavish & Modern: Upholstered in linen fabric with a button-tufted and square-stitched surface, this deluxe platform bed will add sophisticated style to any bedroom.
  #       Adjustable Headboard: The headboard can be adjusted to 38 or 40.2 inches in height, suitable for a 6-12 inches mattress.
  #       No box spring needed: Designed with strong wood slats support, it does not require a box spring or any other additional foundations.',
  #       price: Faker::Commerce.price
  #     },
  #     {
  #       seller_id: 3,
  #       name: 'Fabric dresser',
  #       description:'
  #       Multifunction Storage Tower: This fabric dresser is ideal for wherever you want to keep clutter under control, such as bedroom, nursery, closet, entryway, dorm, living room; and matches perfectly with other WLIVE dressers.
  #       Roomy Storage Space: The dresser for bedroom has 8 deep drawers that are spacious and provide endless organizational possibilities. Wood top is great for placing frequently used items, keeping them in your reach.
  #       Sturdy and Durable: Strong steel frame, wooden top and high-grade non-woven fabric offer stable support and ensure years of use. The tall dresser has anti-tipping accessories to prevent incidents.
  #       8 Drawer Chest: The double dresser features elegant easy-to-pull handles, water-resistant wooden top and 4 adjustable feet that can protect the floor from scratches. Adjustable feet are also designed for uneven ground.
  #       Overall Dimensions: The storage drawer unit measures 31.5" L x 11.8" W x 37.4" H. The chest of drawers comes with detailed instructions and tools needed for installation; assembly video has been uploaded for your reference.',
  #       price: Faker::Commerce.price
  #     },
  #     {
  #       seller_id: 3,
  #       name: 'Sectional Sofa',
  #       description:'This Sectional couch is an excellent addition to your living room. Mix and match the included Chaise, Ottoman, Pillow to create whatever shape works best for your space.
  #       Whether youre having a family gathering or hosting a game night, this sofa set is sure to make the occasion more enjoyable.',
  #       price: Faker::Commerce.price
  #     },
  #     {
  #       seller_id: 3,
  #       name: 'Modern Stool',
  #       description:'The x-frame of this medium ottoman hints at mid-century design while adding the stability and strength that allows this footstool to double as extra seating as needed.',
  #       price: Faker::Commerce.price
  #     },
  #     {
  #       seller_id: 3,
  #       name: '5-Cube Organizer',
  #       description:'
  #       Modern cube organizer bookcase with 5 open front shelving compartments
  #       Ideal for general storage or display of books, collectibles, photos, artwork, and more
  #       Particle board, MDF construction with smooth, durable PVC laminate finish
  #       Anti-tipping device for extra stability and child safety
  #       Easy assembly with hardware and instructions included
  #       Full dimensions measure 19.5 x 9.4 x 31.5 inches (LxWxH); 2 cube internal size 9.1 x 9.1 x 15 inches (LxWxH); 3 cube internal size 9.1 x 9.1 x 9.9/9.6/9.9 inches (LxWxH)',
  #       price: Faker::Commerce.price
  #     },
  #     {
  #       seller_id: 3,
  #       name: 'Tums',
  #       description:Faker::Lorem.paragraph,
  #       price: Faker::Commerce.price
  #     }
      
  #   ])

  #   end
 
    
  #   puts "Done!"
  # end

  Product.all.each do |product| 
    
    product_name = product.name.split(' ').join('').downcase
    # url = "https://dali-sahara-seeds.s3.us-west-1.amazonaws.com/#{product_name}.jpg"
    # p url 
      begin
        product.photo.attach(
        io: URI.parse("https://dali-sahara-seeds.s3.us-west-1.amazonaws.com/#{product_name}.jpg").open,
        filename: "#{product_name}.jpg"
        )
        puts 'succesfully attached'
      rescue
        begin
          new_product = product_name.split('-').join('').downcase
          product.photo.attach(
          io: URI.parse("https://dali-sahara-seeds.s3.us-west-1.amazonaws.com/#{new_product}.jpg").open,
          filename: "#{new_product}.jpg"
          )
          puts' succesfully attached'

        rescue
          product.photo.attach(
            io: URI.parse("https://dali-sahara-seeds.s3.us-west-1.amazonaws.com/dresser3.jpg").open,
            filename: "dresser3.jpg"
            )
          puts 'attached dresser'
        end
      end
      # io: URI.open("https://dali-sahara-seeds.s3.us-west-1.amazonaws.com/#{product_name}.jpg")
    


  # 3.times do 
  # Product.create!({
  #   seller_id: 3,
  #   name: 'Tums',
  #   description:Faker::Lorem.paragraph,
  #   price: Faker::Commerce.price
    # })
    # end 
  end
end