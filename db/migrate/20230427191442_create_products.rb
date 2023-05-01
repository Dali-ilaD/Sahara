class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.integer :seller_id, null:false, foreign_key: {to_table: :users}
      t.string :name, null:false
      t.text :description, null:false
      t.float :price, null:false
      t.timestamps
    end
  end
end
