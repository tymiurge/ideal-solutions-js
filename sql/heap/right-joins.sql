select Joins.table_books.title, Joins.table_languages.name
from Joins.table_books
right join Joins.table_languages on Joins.table_books.language_id = Joins.table_languages.id
