/**

=========================== Orders ============================
id  productId   amount shipCountry    freight   orderDate
001     0001      2      China          10          051017
002     0001      4      China          15          061017
003     0007      10     Uzbekistan     20          091117
004     0008      20     Uzbekistan     30          100117

notes: 
    - date format is ddmmyy but probably it should be unix 
      timestamp 
================================================================
TASK:   find 3 countries with the highest average freight
*/

SELECT TOP 3
    shipCountry, 
    averageFreight = Avg(freight)
FROM
    orders
GROUP BY shipCountry
ORDER BY averageFreight desc