export const genres = [
    { _id: "5b21ca3eeb7f6fbccd471819", name: "All Genres", selectAll: true},
    { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    { _id: "5b21ca3eeb7f6fbccd471821", name: "Drama" }
];

export function getGenres() {
    return genres.filter(g => g);
}
