class CreateSeasons < ActiveRecord::Migration[5.1]

  # data from API looks like this:
  #---------------------------------
  # {:season=>"2017-18", :age=>"30", :team=>"PIT",
  # :league=>"NHL", :gp=>"55", :g=>"17", :a=>"43",
  # :pts=>"60", :plus_minus=>"-9", :pim=>"44",
  # :evg=>"10", :ppg=>"7", :sh=>"0", :gw=>"3",
  # :eva=>"20", :ppa=>"23", :s=>"155",
  # :s_percentage=>"11.0"}
  def change
    create_table :seasons do |t|
      t.string :season
      t.integer :age
      t.string :team
      t.integer :gp
      t.integer :g
      t.integer :a
      t.integer :pts
      t.integer :plus_minus
      t.integer :pim
      t.integer :evg
      t.integer :ppg
      t.integer :sh
      t.integer :gw
      t.integer :eva
      t.integer :ppa
      t.integer :s
      t.float :s_percentage
      t.integer :toi
      t.references :player, foreign_key: true

      t.timestamps
    end
  end
end
