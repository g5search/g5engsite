class AddTitleToProfiles < ActiveRecord::Migration
  def self.up
    add_column :refinery_profiles, :title, :string, :limit => 128
  end
  def self.down
    remove_column :refinery_profiles, :title
  end
end
