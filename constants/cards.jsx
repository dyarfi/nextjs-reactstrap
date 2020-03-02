const CARDS = {
    posts:[
        {
            "category": "Recipes",
            "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
            "image": "assets/images/menu768x768px1.jpg",
            "publishedAt": "Wed, 12-02-2018",
            "postBy": "Wed Admin",
            "views": "201"
        },
        {
            "category": "Uncategorized",
            "title": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
            "text": "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
            "image": "assets/images/menu768x768px1.jpg",
            "publishedAt": "Wed, 12-02-2018",
            "postBy": "Owner",
            "views": "23"
        },
        {
            "category": "Meals",
            "title": "Contrary to popular belief, Lorem Ipsum is not simply random text",
            "text": "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            "image": "assets/images/menu768x768px1.jpg",
            "publishedAt": "Wed, 12-02-2019",
            "postBy": "Lead Chef",
            "views": "120"
        },
        {
            "category": "Steaks",
            "title": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested",
            "text": "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            "image": "assets/images/menu768x768px1.jpg",
            "publishedAt": "Wed, 12-02-2019",
            "postBy": "Chief Kitchen",
            "views": "321"
        },
        {
            "category": "Random",
            "title": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested",
            "text": "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            "image": "assets/images/menu768x768px1.jpg",
            "publishedAt": "Wed, 12-02-2019",
            "postBy": "Chief Kitchen",
            "views": "435"
        },
        {
            "category": "Uncategorized",
            "title": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested",
            "text": "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            "image": "assets/images/menu768x768px1.jpg",
            "publishedAt": "Wed, 12-02-2019",
            "postBy": "Chief Kitchen",
            "views": "98"
        }
    ],
    menus : [
		{
			"category":"steaks",			
			"image":"assets/img/menu768x768px1.jpg",
			"title":"Eggplant Parmigiana Salad",
			"description": "Fried eggplant, mixed greens, fresh mozzarella, thinly sliced cherry pepper, tomato",
			"price":"12.2",
			"label":"Hot Plate",
			"tag":"default"
		},
		{
			"category":"dinner",			
			"image":"assets/img/menu768x768px2.jpg",
			"title":"Grilled Portobello Salad",
			"description": "Fresh mozzarella, roasted red peppers, basil, extra virgin olive oil, balsamic glaze.",
			"price":"10",
			"label":"Popular",
			"tag":"warning"
		},
		{
			"category":"breakfast",			
			"image":"assets/img/menu768x768px3.jpg",
			"title":"Bed and Breakfast",
			"description": "Grilled chicken, grilled zucchini, fresh mozzarella, roasted pepper, roasted red onion.",
			"price":"7.5",
			"label":"Hot Plate",
			"tag":"default"
		},
		{
			"category":"meals",			
			"image":"assets/img/menu768x768px4.jpg",
			"title":"Tenderloin",
			"description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
			"price": "22.2",
			"label":"Popular",
			"tag":"danger"
		},
		{
			"category":"dinner",			
			"image":"assets/img/menu768x768px5.jpg",
			"title":"Lamb Chops",
			"description": "Lightly breaded breast of chicken topped with sautéed diced tomatoes, red onions and melted fresh mozzarella.",
			"price": "15",
			"label":"Hot Plate",
			"tag":"warning"
		},
		{
			"category":"meals",			
			"image":"assets/img/menu768x768px6.jpg",
			"title":"Sautéed Egg Roll",
			"description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
			"price": "7.7",
			"label":"Hot Plate",
			"tag":"warning"
		},
		{
			"category":"desert",			
			"image":"assets/img/menu768x768px1.jpg",
			"title":"Margarine Eggs",
			"description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
			"price": "4.5",
			"tag":"warning"
		},
		{
			"category":"steaks",			
			"image":"assets/img/menu768x768px2.jpg",
			"title":"Steaks Eggs",
			"description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
			"price": "8.8",
			"tag":"warning"
		},
		{
			"category":"steaks",			
			"image":"assets/img/menu768x768px3.jpg",
			"title":"Steaks Fillet Eggs",
			"description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
			"price": "9.3",
			"tag":""
		},
		{
			"category":"steaks",			
			"image":"assets/img/menu768x768px4.jpg",
			"title":"Fillet Egg Bread",
			"description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
			"price": "5.2",
			"tag":"danger"
		},
		{
			"category":"hams",			
			"image":"assets/img/menu768x768px5.jpg",
			"title":"Spicy Scarpariello Wings",
			"description": "Breast of chicken sautéed with lemon, white wine, capers and artichoke hearts.",
			"price": "22.23",
			"tag":"",
			"label":"Hot Plate"
		},
		{
			"category":"hams",			
			"image":"assets/img/menu768x768px6.jpg",
			"title":"Roasted Peppers w/ Anchovies with Mozzarella",
			"description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
			"price": "11.5",
			"tag":"warning",
			"label":"Popular"
		}
    ],	
};


export {
    CARDS
}