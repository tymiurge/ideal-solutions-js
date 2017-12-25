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

TASK: list customers by region, alphabetically
customers with no region should be at the end
within the same region companies should be sorted by id                                                        
*/

SELECT 
    id, companyName, region
FROM customers
ORDER BY
    CASE
        when Region is null then 1
        else 0
    END,
    Region,
    id
