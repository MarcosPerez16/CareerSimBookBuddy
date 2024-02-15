//remember in order to use as an export start each function with:
// export async function functionName(){}
//then can be imported into a component

const APIURL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com";

//fetch books

export const fetchBooks = async () => {
  const response = await fetch(`${APIURL}/api/books`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);

  return data.books;
};
