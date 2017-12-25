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


================================== OrderDetails ===================================
id     orderId productId quantity   unitPrice
001     0002    0001        10          1
002     0003    0002        11          2
003     0003    0003        20          3


TASK: select customers who've made at least 1 order with a total value (not including the discount)
equal to $10.000 or more. Consider orders made in the 2016 only
*/

SELECT
    Customers.id,
    Customers.companyName,
    Orders.id,
    TotalOrderAmount = SUM(OrderDetails.quantity * OrderDetails.unitPrice)
FROM Customers
    Join Orders 
        on Orders.customerId = Customers.id
    Join OrderDetails
        on Orders.id = OrderDetails.orderId
WHERE
    OrderDate >= '20160101'
    and OrderDate < '20170101'
GROUP BY
    Customers.id,
    Customers.companyName,
    Orders.id
HAVING SUM(OrderDetails.quantity * OrderDetails.unitPrice) > 10000
ORDER BY TotalOrderAmount DESC

/**
TASK 2: now vip customers are defined as those ones who've made spent $15K in total
(meaning not with a single only order but with several orders).
*/

SELECT
    Customers.id,
    Customers.companyName,
    -- Orders.id, -- now by commenting this we're grouping by customer, not order level
    TotalOrderAmount = SUM(OrderDetails.quantity * OrderDetails.unitPrice)
FROM Customers
    Join Orders 
        on Orders.customerId = Customers.id
    Join OrderDetails
        on Orders.id = OrderDetails.orderId
WHERE
    OrderDate >= '20160101'
    and OrderDate < '20170101'
GROUP BY
    Customers.id,
    Customers.companyName
    -- Orders.id
HAVING SUM(OrderDetails.quantity * OrderDetails.unitPrice) > 15000
ORDER BY TotalOrderAmount DESC