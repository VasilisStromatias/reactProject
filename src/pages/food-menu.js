const foodData =[
// PANCAKES
        {
            "category": "brunch",
            "subcategory": "pancakes",
            "name": "Upupa Pancakes",
            "ingredients" : "Με λευκή σοκολάτα, πραλίνα φουντουκιού, πολύχρωμα δημητριακά, πουράκια σοκολάτας, marshmallows"
        },

        {
            "category": "brunch",
            "subcategory": "pancakes",
            "name": "Σοκολάτα μπισκότο",
            "ingredients" : ""
        },

        {
            "category": "brunch",
            "subcategory": "pancakes",
            "name": "Σοκολάτα-μπισκότο-μπανάνα",
            "ingredients" : ""
        },

        {
            "category": "brunch",
            "subcategory": "pancakes",
            "name": "Ταχίνι & Μέλι",
            "ingredients" : ""
        },

        {
            "category": "brunch",
            "subcategory": "pancakes",
            "name": "Αλμυρά Pancakes",
            "ingredients" : "με ham, gouda, τομάτα, σώς ταρτάρ, αυγό βραστό"
        },

// SANDWICHES

{
    "category": "brunch",
    "subcategory": "sandwich",
    "name": "Sandwich προσούτο",
    "ingredients" : "με χειροποίητο τραγανό ψωμάκι απο την ζύμη της πίτσας μας, προσούτο Πάρμας, φλοίδες παλαιωμένης γραβιέρας Ρεθύμνου, ολόφρεσκη πράσινη σαλάτα, τομάτα και σπιτική μαρμελάδα σύκου"
},

{
    "category": "brunch",
    "subcategory": "sandwich",
    "name": "Sandwich απάκι κοτόπουλο",
    "ingredients" : "με χειροποίητο τραγανό ψωμάκι απο την ζύμη της πίτσας μας, Κρητικό απάκι κοτόπουλο, φλοίδες παρμεζάνας, τραγανό μπέικον, iceberg, και σπιτική σώς γιαουρτιού"
},

// EGGS

{
    "category": "brunch",
    "subcategory": "eggs",
    "name": "Ομελέτα Upupa",
    "ingredients" : "με μπέικον, καπνιστό τυρί, Scarmoza, μανιτάρια, φρέσκια τομάτα, σπαράγγια"
},

{
    "category": "brunch",
    "subcategory": "eggs",
    "name": "Ομελέτα",
    "ingredients" : "με γραβιέρα Κρήτης, φρέσκια τομάτα"
},

{
    "category": "brunch",
    "subcategory": "eggs",
    "name": "Ομελέτα με ασπράδι αυγού",
    "ingredients" : "με Κρητικό απάκι κοτόπουλο, μοτσαρέλα, βιολογικούς σπόρους κάνναβης, αβοκάντο"
},

{
    "category": "brunch",
    "subcategory": "eggs",
    "name": "Scrables eggs",
    "ingredients" : "με παραδοσιακό σύγκλινο Μάνης, φρέσκια τομάτα, Κρητική γαλομυζήθρα, φρέσκια ρίγανη και θυμαρίσιο μέλι σε προζυμένιο ψωμί"
},

{
    "category": "brunch",
    "subcategory": "eggs",
    "name": "Scrabled eggs απλό",
    "ingredients" : "με φρέσκια σαλάτα σε προζυμένιο ψωμί"
},

{
    "category": "brunch",
    "subcategory": "eggs",
    "name": "Croque Madame",
    "ingredients" : "με αφράτο Γαλλικό Brioche, προσούτο, Cotto, τυρί gouda, αυγό ποσέ και σπιτική μπεσαμέλ"
},

{
    "category": "brunch",
    "subcategory": "eggs",
    "name": "Benedict",
    "ingredients" : "ποσέ αυγά σε English muffin, μπέικον, χειροποίητη σως hollandese, τοματίνια και baby ρόκα"
},


// LUNCH
        {
            "category": "lunch",
            "name": "Carbonara",
            "ingredients" : "με λιγκουίνι, καπνιστή πανσέτα, παρμεζάνα, αυγό ποσέ, τυρί taleggio, φρέσκο πιπέρι"
        },

        {
            "category": "lunch",
            "name": "Παπαρδέλες",
            "ingredients" : "με ανάμεικτα λαχανικά, πέστο πιπεριάς Φλωρίνης, γαλομυζήθρα Κρήτης, πούδρα αποξηραμένης ελιάς"
        },

        {
            "category": "lunch",
            "name": "Gnocchi πατάτας",
            "ingredients" : "με μοτσαρέλα, σάλτσα ντομάτας αρωματισμένη με βασιλικό, παρμεζάνα, φρέσκο σπανάκι"
        },

        {
            "category": "lunch",
            "name": "Trip-Tip",
            "ingredients" : "Τρυφερό κομμάτι μόσχαρίσιου κρέατος, αρωματική σάλτσα Ελληνικών βοτάνων και χειροποίητα καπνιστα τσίπς γλυκοπατάτας"
        },

        {
            "category": "lunch",
            "name": "Κοτόπουλο Πτισάνη",
            "ingredients" : "Στήθος κοτόπουλο μαγειρεμένο σε κενό αέρος με μέλι, πουρέ σελινόριζας, κρόκο μάνγκο, σπαράγγια και βελούδινη σάλτσα κοτόπουλο με πτισάνη (αποφλοιωμένο κριθάρι)"
        },



// DESSERTS 
        {
            "category": "dessert",
            "name": "Banoffee αλλιώς...",
            "ingredients" : "Υφές σοκολάτας Valrhona, σπιτική κρέμα τόνκα, καραμελωμένη μπανάνα σε ζάχαρη κανέλας, παγωτό καραμέλα"
        },

        {
            "category": "dessert",
            "name": "Γαλακτομπούρεκο",
            "ingredients" : "Βελούδινη κρέμα βανίλιας με καραμελωμένα τραγανά φύλλα και καβουρδισμένα φυστίκια Αιγίνης"
        },
        {
            "category": "dessert",
            "name": "Upupa Προφιτερόλ",
            "ingredients" : "Τριλογία απο υφές σοκολάτας, γεμιστό αφράτο shoux, φράουλα και τραγανό cruble κακάο Valrhona"
        },

// SALADS
        {
            "category": "salads",
            "name": "Ο κήπος μας",
            "ingredients" : "Μία εκδοχή Ελληνικής σαλάτας με πολύχρωμα οργανικά ντοματίνια, πίκλα κρεμμυδιού σε ξύδι φράουλας, αγγούρι, κρίταμο, πάστα ελιάς, κάπαρη, γαλομυζύθρα Κρήτης και χώμα χαρουπιού"
        },

        {
            "category": "salads",
            "name": "Κοτόπουλο",
            "ingredients" : "με ολόφρεσκα ανάμεικτα λαχανικά ημέρας, ζουμερά μαριναρισμένα κομμάτια κοτόπουλο, αποξηραμένα σύκα Κύμης και γραβιέρα Ρεθύμνου, καβουρδισμένα φουντούκια, βινεγκρέτ μέλι - μπέικον"
        },
        {
            "category": "salads",
            "name": "Σαλάτα Σπανακόπιτα",
            "ingredients" : "με ολόφρεσκα φύλλα baby σπανάκι, άνηθο, φέτα Π.Ο.Π Ελασσόνας, βινεγκρέτ με όλα τα αρώματα της Ελληνικής παραδοσιακής σπανακόπιτας"
        },

// PIZZETE
         {
            "category": "pizzete",
            "name": "Κόκκινη",
            "ingredients" : "με φρέσκο λουκάνικο, σάλτσα τομάτας, μοτσαρέλα, παρμεζάνα και baby ρόκα"
        },

        {
            "category": "pizzete",
            "name": "Λευκή",
            "ingredients" : "με μοτσαρέλα, σάλτσα τρούφας, άγρια μανιτάρια, τυρί taleggio και προσούτο"
        },

        {
            "category": "pizzete",
            "name": "Πράσινη",
            "ingredients" : "με πράσινη ζύμη απο σπανάκι & πέστο βασιλικού, κατσικίσιο τυρί, μοτσαρέλα, ψητά λαχανικά, παρμεζάνα (Vegeterian)"
        },

        {
            "category": "pizzete",
            "name": "Μαύρη",
            "ingredients" : "με μαύρη ζύμη απο μελάνι σουπιάς, μοτσαρέλα, σάλτσα τομάτας, καπνιστό σολωμό, παρμεζάνα, σχοινόπρασο, χαβιάρι"
        },

        {
            "category": "pizzete",
            "name": "Spicy",
            "ingredients" : "με καυτερό σαλάμι, σπαράγγια, παρμεζάνα, λιαστή τομάτα, μοτσαρέλα, καπνιστό τυρί Scarmoza, σάλτσα τομάτας"
        },

//BURGER
        {
            "category": "burger",
            "name": "Guacamole",
            "ingredients":"με μπιφτέκι βοδινού κιμά, τραγανό προσούτο, καραμελωμένα κρεμμύδια σε πετιμέζι, τυρί gouda, σπιτική κέτσαπ και τηγανητό αυγό"
        },

        {
            "category": "burger",
            "name": "Chedar-Bacon",
            "ingredients":"με μπιφτέκι βοδινού κιμά, καραμελωμένα κρεμμύδια, χειροποίητη μαγιονέζα με φρούτα του δάσους, σπιτική κέτσαπ, iceberg, τομάτα"
        },

        {
            "category": "burger",
            "name": "Baby",
            "ingredients":"με μπιφτέκι βοδινού κιμά, τυρί gouda, σπιτική κέτσαπ, iceberg, τομάτα"
        },

//BAR-FOOD
        {
            "category": "barfood",
            "name": "Γή και θάλασσα",
            "ingredients":"Ολόφρεσκο ταρτάτ απο μοσχίδα Ελληνικής εκτροφής με χειροποίητη μουστάρδα καρότου, καπνιστά μύδια σε ξύλο πορτοκαλιάς, ριζογκοφρέτα με μελάνι σουπιάς"
        },

        {
            "category": "barfood",
            "name": "Εκλέρ μου...",
            "ingredients":"Χειροποίητο εκλέρ ημέρας με κόκορα κρασάτο, μους καπνιστής μελιτζάνας, μαριναρισμένο ανανά και υφές Ρεθυμνιώτικης γραβιέρας (2 τμχ.)"
        },

        {
            "category": "barfood",
            "name": "Λαχανοντολμάδες Λαχανικών",
            "ingredients":"με σπιτική πραλίνα φυστίκι, κρέμα μάνγκο, μίσο και μπισκότο φυστικιού (Vegeterian)"
        },

        {
            "category": "barfood",
            "name": "Γαρίδες",
            "ingredients":"με μελάνι τεμπούρα, λευκό ταραμά, κίτρινο παντζάρι, χαβιάρι (4τμχ.)"
        },

        {
            "category": "barfood",
            "name": "Tartine",
            "ingredients":"με μοτσαρέλα, pesto βασιλικού, τοματίνια, ελαιόλαδο"
        },

        {
            "category": "barfood",
            "name": "Platter τυριών & αλλαντικών",
            "ingredients":"με κρητική γραβιέρα, scarmoza affumicata, παρμεζάνα, γαλομυζήθρα Χανίων, καπνιστό απάκι κοτόπουλο Κρήτης, προσούτο Πάρμας, σαλάμι αέρος Λευκάδος, αποξηραμένα σύκα Κρήτης"
        },

        {
            "category": "",
            "name": "",
            "ingredients":""
        },

        {
            "category": "",
            "name": "",
            "ingredients":""
        },

]

export default foodData;