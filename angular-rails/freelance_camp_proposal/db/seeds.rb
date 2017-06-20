# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do |proposal|
Proposal.create!(
    customer: "Customer #{proposal}",
    portfolio_url: string = 'http://portafolio.jordanhudgens.com',
    tools: 'Ror, Angular2, and Postgresql',
    estimated_hours: (80 + proposal),
    hourly_rate: 120,
    week_to_complete: 12,
    client_email: 'jordan@devcamp.com',
)
end
