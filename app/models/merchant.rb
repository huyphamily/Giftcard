# == Schema Information
#
# Table name: merchants
#
#  id             :integer, not null, primary key
#  name           :string
#  description    :text
#  image          :text
#  min_amount     :decimal, precision: 8, scale: 2
#  max_amount     :decimal, precision: 8, scale: 2

class Merchant < ActiveRecord::Base
  validates :name, :max_amount, :min_amount, :image, :description, presence: true
end
