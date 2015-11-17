class CreateMerchants < ActiveRecord::Migration
  def change
    create_table :merchants do |t|
      t.column :name, :string
      t.column :description, :text
      t.column :max_amount, :decimal, precision: 8, scale: 2
      t.column :min_amount, :decimal, precision: 8, scale: 2
      t.column :image, :text
      t.column :created_at, :datetime
      t.column :updated_at, :datetime
    end
  end
end
