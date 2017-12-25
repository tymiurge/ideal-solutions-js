/**

=================================== Customers ============================================
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

====================================== Orders ============================================
id  productId   amount shipCountry    freight   orderDate       customerId
001     0001      2      China          10          051017          001
002     0001      4      China          15          061017          002
003     0007      10     Uzbekistan     20          091117          002
004     0008      20     Uzbekistan     30          100117          003
*/

SELECT 
    Customers.id,
    Orders.customerId
FROM Customers
    left join Orders
        on Orders.customerId = Customers.id
WHERE
    Orders.customerId is null
