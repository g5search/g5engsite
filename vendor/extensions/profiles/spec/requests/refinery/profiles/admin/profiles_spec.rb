# encoding: utf-8
require "spec_helper"

describe Refinery do
  describe "Profiles" do
    describe "Admin" do
      describe "profiles" do
        login_refinery_user

        describe "profiles list" do
          before(:each) do
            FactoryGirl.create(:profile, :name => "UniqueTitleOne")
            FactoryGirl.create(:profile, :name => "UniqueTitleTwo")
          end

          it "shows two items" do
            visit refinery.profiles_admin_profiles_path
            page.should have_content("UniqueTitleOne")
            page.should have_content("UniqueTitleTwo")
          end
        end

        describe "create" do
          before(:each) do
            visit refinery.profiles_admin_profiles_path

            click_link "Add New Profile"
          end

          context "valid data" do
            it "should succeed" do
              fill_in "Name", :with => "This is a test of the first string field"
              click_button "Save"

              page.should have_content("'This is a test of the first string field' was successfully added.")
              Refinery::Profiles::Profile.count.should == 1
            end
          end

          context "invalid data" do
            it "should fail" do
              click_button "Save"

              page.should have_content("Name can't be blank")
              Refinery::Profiles::Profile.count.should == 0
            end
          end

          context "duplicate" do
            before(:each) { FactoryGirl.create(:profile, :name => "UniqueTitle") }

            it "should fail" do
              visit refinery.profiles_admin_profiles_path

              click_link "Add New Profile"

              fill_in "Name", :with => "UniqueTitle"
              click_button "Save"

              page.should have_content("There were problems")
              Refinery::Profiles::Profile.count.should == 1
            end
          end

        end

        describe "edit" do
          before(:each) { FactoryGirl.create(:profile, :name => "A name") }

          it "should succeed" do
            visit refinery.profiles_admin_profiles_path

            within ".actions" do
              click_link "Edit this profile"
            end

            fill_in "Name", :with => "A different name"
            click_button "Save"

            page.should have_content("'A different name' was successfully updated.")
            page.should have_no_content("A name")
          end
        end

        describe "destroy" do
          before(:each) { FactoryGirl.create(:profile, :name => "UniqueTitleOne") }

          it "should succeed" do
            visit refinery.profiles_admin_profiles_path

            click_link "Remove this profile forever"

            page.should have_content("'UniqueTitleOne' was successfully removed.")
            Refinery::Profiles::Profile.count.should == 0
          end
        end

      end
    end
  end
end
