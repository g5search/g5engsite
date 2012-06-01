
FactoryGirl.define do
  factory :profile, :class => Refinery::Profiles::Profile do
    sequence(:name) { |n| "refinery#{n}" }
  end
end

