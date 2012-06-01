module Refinery
  module Profiles
    module Admin
      class ProfilesController < ::Refinery::AdminController

        crudify :'refinery/profiles/profile',
                :title_attribute => 'name', :xhr_paging => true

      end
    end
  end
end
