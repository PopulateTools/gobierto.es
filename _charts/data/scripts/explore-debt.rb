def perc(value,total)
  (value.to_f*100)/total.to_f
end

def perc_diff(v1,v2)
  ((v1.to_f - v2.to_f)/v2.to_f)*100
end


CSV.open("explore-debt.csv", "wb") do |csv|
  csv << %W{ year ine_code name province_id autonomous_region_id debt population }

  (2010..2015).each do |year|
    puts year
    file_path = Rails.root.join 'db', 'data', 'debt', "debt-#{year}.csv"
    unless File.file?(file_path)
      raise "Missing file #{file_path}"
    end
    INE::Places.hydratate INE::Places::Place, "https://presupuestos.gobierto.es/api/data/population/#{year}.csv", id_column: 'ine_code', as: :population, value_column: 'value', convert_to: :integer

    CSV.foreach(file_path) do |row|
      id = row[1] + format('%.3i', row[2].to_i)
      next if id.nil?
      debt = row[4].tr('.','').to_f * 1000
      place = INE::Places::Place.find id
      if place.nil?
        puts "==================="
        puts row.join(',')
        puts "==================="
        next
      end
      csv << [ year, place.id, place.name, place.province.id, place.province.autonomous_region.id, debt, place.data.population]
    end
  end
end

