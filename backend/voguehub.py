import mysql.connector

# Database connection
try:
    conn = mysql.connector.connect(
        host='localhost',
        user='root',
        password='lcy@#YAHYA123',
        database='voguehub'
    )
    cursor = conn.cursor()

    # Data to insert
    data = [
        ("Stretch-Wool Flannel Blazer",
         "https://image-resizing.booztcdn.com/polo-ralph-lauren-women/prw211910389_cgreymelange_v10698312y2k_10.webp?has_grey=0&has_webp=0&size=source",
         "https://image-resizing.booztcdn.com/polo-ralph-lauren-women/prw211910389_cgreymelange_v10698312y2k.webp?has_grey=1&has_webp=0&size=source",
         "https://image-resizing.booztcdn.com/polo-ralph-lauren-women/prw211910389_cgreymelange_v10698312y2k_1.webp?has_grey=1&has_webp=0&size=source",
         "https://image-resizing.booztcdn.com/polo-ralph-lauren-women/prw211910389_cgreymelange_v10698312y2k_90.webp?has_grey=0&has_webp=0&size=source",
         "https://image-resizing.booztcdn.com/polo-ralph-lauren-women/prw211910389_cgreymelange_v10698312y2k_91.webp?has_grey=0&has_webp=0&size=source",
         "Polo Ralph Lauren", 699, True, False, True, True, True, "New", "Loose fit", "women"),

        ("George F - Blazers",
         "https://image-resizing.booztcdn.com/matinique/me30201320_cdarknavy_v20210.webp?has_grey=1&has_webp=0&size=source",
         "https://image-resizing.booztcdn.com/matinique/me30201320_cblack_v20050_12.webp?has_grey=0&has_webp=1&size=source",
         "https://image-resizing.booztcdn.com/matinique/me30201320_cdarknavy_v20210_10.webp?has_grey=0&has_webp=1&size=source",
         "https://image-resizing.booztcdn.com/matinique/me30201320_cdarknavy_v20210_1.webp?has_grey=1&has_webp=0&size=source",
         "https://image-resizing.booztcdn.com/matinique/me30201320_cdarknavy_v20210_13.webp?has_grey=0&has_webp=1&size=source",
         "Matinique", 299, True, False, True, True, True, "", "", "women"),

        ("FLEX DOBBY SF SHIRT",
         "https://image-resizing.booztcdn.com/tommy-hilfiger/tohmw0mw37111_cnavy_vdxd.webp?has_grey=1&has_webp=1&size=source",
         "https://image-resizing.booztcdn.com/tommy-hilfiger/tohmw0mw37111_cnavy_vdxd_1.webp?has_grey=1&has_webp=1&size=source",
         "https://image-resizing.booztcdn.com/tommy-hilfiger/tohmw0mw37111_cnavy_vdxd_11.webp?has_grey=1&has_webp=1&size=source",
         "https://image-resizing.booztcdn.com/tommy-hilfiger/tohmw0mw37111_cnavy_vdxd_23.webp?has_grey=1&has_webp=1&size=source",
         "", "Tommy Hilfiger", 199, True, False, True, True, True, "", "", "women"),

        ("MAlas - Business Trousers",
         "https://image-resizing.booztcdn.com/matinique/me30204464_cinkblue_v20291_10.webp?has_grey=0&has_webp=0&size=source",
         "https://image-resizing.booztcdn.com/matinique/me30204464_cinkblue_v20291_12.webp?has_grey=0&has_webp=0&size=source",
         "https://image-resizing.booztcdn.com/matinique/me30204464_cinkblue_v20291_13.webp?has_grey=0&has_webp=1&size=source",
         "https://image-resizing.booztcdn.com/matinique/me30204464_cinkblue_v20291_14.webp?has_grey=0&has_webp=0&size=source",
         "https://image-resizing.booztcdn.com/matinique/me30204464_cinkblue_v20291_90.webp?has_grey=0&has_webp=0&size=source",
         "Matinique", 111, True, False, True, True, True, "50% OFF", "Regular Fit", "women"),

        ("B NSW CLUB SSNL SHORT SET",
         "https://image-resizing.booztcdn.com/nike-kids/nks86k794_cblack_v023.webp?has_grey=1&has_webp=0&size=source",
         "https://image-resizing.booztcdn.com/nike-kids/nks86k794_cblack_v023_1.webp?has_grey=1&has_webp=0&size=source",
         "https://image-resizing.booztcdn.com/nike-kids/nks86k794_cblack_v023_2.webp?has_grey=1&has_webp=0&size=source",
         "", "", "Nike", 699, True, False, True, True, True, "", "", "women")
    ]

    # Insert data into the bigSales table
    insert_query = """
        INSERT INTO bigSales (
            name, img1, img2, img3, img4, img5, brand, price, xs, s, m, l, xl, tag, type, filter
        ) VALUES (
            %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s
        )
    """

    # Execute insert for each row of data
    for row in data:
        cursor.execute(insert_query, row)

    # Commit the transaction
    conn.commit()
    print("Data successfully inserted into bigSales table.")

except mysql.connector.Error as err:
    print(f"Error: {err}")

finally:
    # Ensure resources are always closed
    if cursor:
        cursor.close()
    if conn:
        conn.close()
