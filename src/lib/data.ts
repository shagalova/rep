

export interface ISliderImage {
    id: number;
    image: string;
    alt: string;
    className?: string[];
    classList?: ISliderImage["className"]
}

const sliderImages: ISliderImage[] = [
    {
        id: 1,
        image: "/banner1.png",
        alt: "banner1",
    },

    {
        id: 2,
        image: "/banner2.png",
        alt: "banner2",
    },

    {
        id: 3,
        image: "/banner3.png",
        alt: "banner3",
    },
]


export interface IBook {
    id: string;
    title: string;
    authors?: string | string[];
    categories?: string | string[];
    img: string;
    
    description?: string;
    rating?: number;
    review?: number;
    
    
        saleability: string;
  
            price?: number;
            currency?: string;
        
    }


    
export interface IBookInCart {
    id: IBook['id'];
    title: IBook['title'];
    authors?: IBook['authors'];
    img: IBook['img'];
    
    rating?: IBook['rating'];
    review?: IBook['review'];
  
    price: IBook['price'];
    currency: IBook['currency'];
    count: number;
}
export const booksInCart: IBookInCart[] = [
    {
        id: "1",
        img: "/no_cover_thumb.png",
        title: "Mothers stories",
        authors: "Chris Power",
        rating: 0.4,
        review: 353,
        price: 12.63,
        count: 1,
        currency: 'RUB',
    
    },

    {
        id: "2",
        img: "/no_cover_thumb.png",
        title: "sdadads",
        authors: "adsd",
        rating: 0,
        review: 0,
        price: 10,
        count: 1,
        currency: 'RUB',

    }

]

export interface CategoriesProp {
    categories: string[];
   
}

export const categories: string[] = [
"Architecture",
"Art & Fashion",
"Biography",
"Business",
"Crafts & Hobbies",
"Drama",
"Fiction",
"Food & Drink",
"Health & Wellbeing",
"History & Politics",
"Humor",
"Poetry",
"Psychology",
"Science",
"Technology",
"Travel & Maps"
]

export interface FilterProps {

    q: string;
    startIndex: number;
}
//  searchparams: { [key: string]: string | string[] | undefined }
export interface BooksListProps {
    searchParams: FilterProps;
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface LoadMoreProps {
    pageNumber: number;
    isNext: boolean;
}

export const updateSearchParams = (type: string, value: string ) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);
  
    // Set the specified search parameter to the given value
    searchParams.set(type, value);
  
    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };

  export const deleteSearchParams = (type: string) => {
    // Set the specified search parameter to the given value
    const newSearchParams = new URLSearchParams(window.location.search);
  
    // Delete the specified search parameter
    newSearchParams.delete(type.toLocaleLowerCase());
  
    // Construct the updated URL pathname with the deleted search parameter
    const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;
  
    return newPathname;
  };

  export interface User {
    id: number;
    email: string;
    password: string;
    
  }

export default sliderImages;

