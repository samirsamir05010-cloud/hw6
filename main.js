
function checkDataType(value) {
    if (typeof value === "object" && value !== null) {
        return "Непримитивный тип";
    } else {
        return "Примитивный тип";
    }
}

function updateProfileMutably(userObject, newName, newRole) {
    userObject.name = newName;
    userObject.role = newRole;
}

function updateProfileImmutably(userObject, newName, newRole) {
    let newUser = {};
    newUser.id = userObject.id;
    newUser.name = newName;
    newUser.role = newRole;
    return newUser;
}

console.log(checkDataType(25));
console.log(checkDataType("Привет"));
console.log(checkDataType(true));
console.log(checkDataType({ name: "Али" }));

let user = {
    id: 1,
    name: "Али",
    role: "user"
};

updateProfileMutably(user, "Бек", "admin");
console.log(user);

let user2 = {
    id: 2,
    name: "Али",
    role: "user"
};

let updatedUser = updateProfileImmutably(user2, "Бек", "admin");

console.log(user2);
console.log(updatedUser);