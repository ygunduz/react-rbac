const roles = JSON.parse(`
[
    {
        "id" : 1,
        "code" : "ROLE_ADMIN",
        "name" : "Admin Role",
        "permissions" : [
            {
                "id" : 1,
                "action" : "create",
                "screen" : "personnel"
            },
            {
                "id" : 2,
                "action" : "update",
                "screen" : "personnel"
            },
            {
                "id" : 3,
                "action" : "delete",
                "screen" : "personnel"
            },
            {
                "id" : 4,
                "action" : "create",
                "screen" : "zone"
            },
            {
                "id" : 5,
                "action" : "update",
                "screen" : "zone"
            },
            {
                "id" : 6,
                "action" : "delete",
                "screen" : "zone"
            },
            {
                "id" : 7,
                "action" : "list",
                "screen" : "personnel"
            },
            {
                "id" : 8,
                "action" : "list",
                "screen" : "zone"
            }
        ]
    },
    {
        "id" : 1,
        "code" : "ROLE_USER",
        "name" : "User Role",
        "permissions" : [
            {
                "id" : 7,
                "action" : "list",
                "screen" : "personnel"
            },
            {
                "id" : 8,
                "action" : "list",
                "screen" : "zone"
            }
        ]
    }
]`)

export default roles;