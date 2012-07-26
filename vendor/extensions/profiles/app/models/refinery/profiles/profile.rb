module Refinery
  module Profiles
    class Profile < Refinery::Core::BaseModel
      self.table_name = 'refinery_profiles'

      attr_accessible :name, :position, :bio, :picture_id, :title

      acts_as_indexed :fields => [:name, :bio]

      validates :name, :presence => true, :uniqueness => true
      validates :title, :presence => true
      
      belongs_to :picture, :class_name => '::Refinery::Image'
    end
  end
end
