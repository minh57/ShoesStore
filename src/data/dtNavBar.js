const NAVBAR = [
    {
        "id": 1,
        "name": "Home",
        "slug": "/admin/home"
    },
    {
        "id": 2,
        "name": "Products",     
        "slug": "/admin/products",
        "children": [
            {
                "child_name": "Shoes",
                "child_slug": "/admin/products?category=shoes"
            },
            {
                "child_name": "Shirt",
                "child_slug": "/admin/products?category=shirt"
            },
            {
                "child_name": "Pants",
                "child_slug": "/admin/products?category=pants"
            }
        ],
    },
    {
        "id": 3,
        "name": "About",
        "slug": "/admin/about"
    }
];
export default NAVBAR;