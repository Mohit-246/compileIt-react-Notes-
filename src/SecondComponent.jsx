

function SecondComponent({vegetables}) {
    const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Papaya", "Strawberry"]
    return (
        <>
           <div className="flex"> 
            {fruits.map((fruitName, id) => 
            (
                <div key={id}  className="fruits">
                    {fruitName}
                </div>
            )
        )}
           </div> 

           {/* to render the list 

           1. use map / forEach method and iterate.
           2. use parenthesis (element, id) => 
           3. Enclose it with again parenthesis ()
           4. Write a single fragment or div then inside render your content. */}
        <div className="flex">
                    {vegetables.map((vegetable, id) => (
                        <div key={id} className="fruits">
                            {vegetable}
                        </div>
                    ))}
        </div>
           
            
        </>
    )
}

export default SecondComponent;