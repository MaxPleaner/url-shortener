# == Schema Information
#
# Table name: urls
#
#  id         :integer          not null, primary key
#  url        :text
#  alias      :string(255)
#  created_at :datetime
#  updated_at :datetime
#

require 'test_helper'

class UrlTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
