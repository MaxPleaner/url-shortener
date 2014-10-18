# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

dict_path = File.expand_path("../dict.txt", __FILE__)
f = File.open(dict_path)
f.each_line do |f|
  Word.create(name: f.chomp)
  puts "added #{f.chomp} to dictionary"
end
f.close
