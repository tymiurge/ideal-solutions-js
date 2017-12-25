/** 
=================================== Customers ====================================
id   | name        |       country    |  city            | region   |   company name
_____|_____________|__________________|__________________|__________|__________________   
001     shrek           3rd kindroom    swamp                 west      banda Co
002     fiona           3rd kindroom    palace                west      banda Co
003     donkey          3rd kindroom    swamp                 west      banda Co  
004     dragon she      39th land       high castle           north     long tours
005     princess        39th land       high castle           north     long tours
007     wolf            4th kindroom    forest pub
008     1st pig         5th kindroom    yellow forest         south     house building
009     2nd pig         5th kindroom    yellow forest         south     house building
010     3rd pig         5th kindroom    yellow forest         south     house building


TASK: count total customers per country/city
results:
    Country            City       Total
    3rd kindroom       swamp       2
    3rd kindroom       palace      1
*/

select 
    Country, City, TotalCustomers = count(*)
from customers
group by 
    Country, City
order by
    count(*) desc