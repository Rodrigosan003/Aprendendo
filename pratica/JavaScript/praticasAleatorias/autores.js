const authors = [
    "Alice Johnson",
    "Bob Smith",
    "Charlie Davis",
    "Diana Evans",
    "Ethan Brown"
]

function formatAuthorLegacy(list) {
    if (list.length === 0){
        return "No authors available.";
    }
    if (list.length === 1){
        return list[0];
    }
    if (list.length === 2){
        return `${list[0]} and ${list[1]}`;
    }
    const rest = list.slice(0, -1).join(", ");
    const last = list.at(-1);
    return `${rest}, and ${last}`;
}
console.log(formatAuthorLegacy(authors));