class CreateInquiries < ActiveRecord::Migration
  def change
    create_table :inquiries do |t|
      t.string :title
      t.text :text

      t.timestamps null: false
    end
  end
end
