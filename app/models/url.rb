class Url < ActiveRecord::Base

  def self.valid_url?(url)
    url = URI.parse(url) rescue false
    url.kind_of?(URI::HTTP) || url.kind_of?(URI::HTTPS)
  end

  def self.create_alias(url)
    dict_length = Word.all.length
    found_valid_alias = false;
    while !found_valid_alias
      alias_str = ""
      3.times do |i|
        rand_num = rand * dict_length
        alias_str += (Word.find(rand_num.to_i).name + "_")
      end
      alias_str = alias_str[0..-2] # get rid of trailing underscore
      if !Url.find_by_alias(alias_str)   
        found_valid_alias = true
      end
    end
    alias_str
  end

end
