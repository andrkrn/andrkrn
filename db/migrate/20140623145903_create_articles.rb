class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.text :article_content
      t.string :cover
      t.string :description
      t.integer :user_id

      t.timestamps
    end
  end
end
