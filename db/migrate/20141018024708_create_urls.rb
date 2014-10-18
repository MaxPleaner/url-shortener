class CreateUrls < ActiveRecord::Migration
  def change
    create_table :urls do |t|
      t.text :url
      t.string :alias

      t.timestamps
    end
  end
end
