select Joins.table_writers.first_name, Joins.table_writers.last_name, Joins.table_books.title
from Joins.table_writers
left join Joins.table_books on Joins.table_writers.id = Joins.table_books.writer_id
