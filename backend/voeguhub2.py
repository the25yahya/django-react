import mysql.connector

# Database connection
try:
    # Establish connection to the database
    conn = mysql.connector.connect(
        host='localhost',
        user='root',
        password='lcy@#YAHYA123',
        database='voguehub'
    )
    cursor = conn.cursor()

    # Data to insert into the products table
    data = [
        (
            "UA Vanish Woven",
            "https://image-resizing.booztcdn.com/under-armour/uar1373764_cblack_v001.webp?has_grey=1&has_webp=1&size=source",
            "https://image-resizing.booztcdn.com/under-armour/uar1373764_cblack_v001_1.webp?has_grey=1&has_webp=1&size=source",
            "", "", "",
            "Under Armour", 61, True, False, True, True, True,
            "Sport", "Loose fit", ""
        ),
        (
            "MMGComan Sweat Cardigan",
            "https://mosmosh.com/cdn/shop/files/505970469MMGComanSweatCardiganNavy-505951469MMGComanCargoPantNavy-500930101MMGPerryCrunchOSsTeeWhite_3.jpg?crop=region&crop_height=2048&crop_left=0&crop_top=0&crop_width=1536&height=1213&v=1724700821&width=910",
            "https://mosmosh.com/cdn/shop/files/AW24-505970-469_1MMGComanSweatCardiganNavy.png?crop=region&crop_height=3000&crop_left=0&crop_top=0&crop_width=2768&height=832&v=1724700628&width=768",
            "", "", "",
            "mos-mosh", 149, True, False, True, True, True,
            "Swag", "Part of a set", ""
        ),
        (
            "Men's Fluid Coat",
            "https://balenciaga.dam.kering.com/m/66fd00d9de045912/eCom-809142TRO411262_J.jpg?v=2",
            "https://balenciaga.dam.kering.com/m/259881418dc2cc6/eCom-809142TRO411262_F.jpg?v=1",
            "https://balenciaga.dam.kering.com/m/d0557b55f53361d/eCom-809142TRO411262_G.jpg?v=1",
            "", "",
            "Balenciaga", 1999, True, False, True, True, True,
            "Designer", "", ""
        ),
        (
            "The Iconic Mesh Polo Shirt",
            "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1266689_alternate10?$rl_4x5_zoom$",
            "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1266689_lifestyle?$rl_4x5_zoom$",
            "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1266689_alternate3?$rl_4x5_zoom$",
            "https://image-resizing.booztcdn.com/matinique/me30204464_cinkblue_v20291_14.webp?has_grey=0&has_webp=0&size=source",
            "https://image-resizing.booztcdn.com/matinique/me30204464_cinkblue_v20291_90.webp?has_grey=0&has_webp=0&size=source",
            "Polo", 111, True, False, True, True, True,
            "20% OFF", "Regular Fit", ""
        )
    ]

    # Insert query for the products table
    insert_query = """
        INSERT INTO products (
            name, img1, img2, img3, img4, img5, brand, price, xs, s, m, l, xl, tag, type, description
        ) VALUES (
            %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s
        )
    """

    # Execute insert for each row of data
    for row in data:
        cursor.execute(insert_query, row)

    # Commit the transaction
    conn.commit()
    print("Data successfully inserted into products table.")

except mysql.connector.Error as err:
    print(f"Error: {err}")

finally:
    # Ensure resources are always closed if they were created
    if 'cursor' in locals() and cursor:
        cursor.close()
    if 'conn' in locals() and conn:
        conn.close()
