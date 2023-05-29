class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
        t.references "user_id", null: false, foreign_key: true
        t.references "product_id", null: false, foreign_key: true
        t.text "body", null: false
        t.integer "rating", null: false
      t.timestamps
    end
  end
end
