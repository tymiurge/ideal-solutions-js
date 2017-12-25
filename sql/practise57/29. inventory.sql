/*
==================================  Products ======================================
id    |       name               | categoryId  | unitsInStock | reorderLevel
______|__________________________|_____________|______________|_______________
0001    24k facial massager         0001            100             25
0002    cosmetics makeup brushes    0001            300             500
0003    aloe sock and glove         0001            50              10
0004    100 years for Yakov         0002            45              50
0005    waiting for godoth          0002            10              20
0006    moloy                       0002            37              10
0007    satanic verses              0002            54              23
0008    robots fairytales           0002            101             11
0009    seven kindrooms khight      0002            46              109
0010    lord of rings               0002            11              22


==================================  Orders ======================================
id  productId    shipCountry    freight      orderDate  employeeId
001     0001       China          10          051017        001
002     0001       China          15          061017        002
003     0007       Uzbekistan     20          091117        001
004     0008       Uzbekistan     30          100117        003


================================== OrderDetails ===================================
id     orderId productId quantity
001     0002    0001        10
002     0003    0002        11
003     0003    0003        20   


================================== Employees =======================================
id      lastName
001     shrek
002     fiona
003     dragon she

*/

SELECT
    Employees.id,
    Employees.lastName,
    Orders.id,
    Products.name,
    OrderDetails.quantity
FROM Employees
    join Orders on Orders.employeeId = Employees.id
    join OrderDetails on Orders.id = OrderDetails.orderId
    join Products on Products.id = OrderDetails.productId
ORDER BY
    Orders.id,
    Products.id

/**
Results: 
employee.id with name <> in order <id> has <N> products 
*/