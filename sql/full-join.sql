# LEFT JOIN
select 	players.name as playerName, tournament.name as tournamentName
from 	players
left join tournament on players.tournament_id = tournament.id

union all

# RIGHT JOIN
select 	players.name as playerName, tournament.name as tournamentName
from		players
right join tournament on players.tournament_id = tournament.id
where players.tournament_id IS NULL # without this there will be duplication of the INNER CROSS 

