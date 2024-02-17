//remember in order to use as an export start each function with:
// export async function functionName(){}
//then can be imported into a component

const APIURL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com";

//Fetch all books

export const fetchBooks = async () => {
  const response = await fetch(`${APIURL}/api/books`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if(!response.ok){
    throw new Error(`Error fetching books: ${response.statusText}`)
  }

  const data = await response.json();
  console.log(data);

  return data.books;
};

//Fetch single book details

export const fetchSingleBook = async (bookId) => {
  const response = await fetch(`${APIURL}/api/books/${bookId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
  return data.book;
};


//Function to fetch user details

export const fetchUserDetails = async (token)=>{

  try {
      const response = await fetch(`${APIURL}/api/users/me`, {
        method: "GET",
        headers: {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${token}`,
        },

      });

      if (!response.ok){
        const errorData = await response.json();
        throw new Error(errorData.message)
      }

      const userData = await response.json();
      return userData;

  } catch (error) {
    throw new Error(`Failed to fetch user details: ${error.message}`)
  }

};


