/** 
    used tables: 

    ============================== Categories ================================
                id    |      name
            ______|_______________
            0001        beauty
            0002        books
            0003        cell phones
            0004        clothing
            0005        grosery
            0006        handmade
            0007        health
            0008        home
            0009        jewelry
            0010        outdoors


    ============================== Products ====================================
            id    |       name               | categoryId  | unitsInStock | reorderLevel
            ______|__________________________|_____________|______________|_______________
            0001    24k facial massager         0001            100             25
            0002    cosmetics makeup brushes    0001            300             500
            0003    aloe sock and glove         0001            50              10
            0004    100 years for Yakov         0002            45              50
            0005    waiting for godoth          0002            10              20
            0006    moloy                       0002            37              10
            0007    satanic verses              0002
            0008    robots fairytales           0002
            0009    seven kindrooms khight      0002
            0010    lord of rings               0002

    TASK: count total products per category
    results:
        books:  7
        beauty: 3
*/

select 
    CategoryName
    , TotalProducts = count(*)
from products
    join categories
        on products.categoryId = categories.id
group by 
    CategoryName
order by 
    count(*) desc
